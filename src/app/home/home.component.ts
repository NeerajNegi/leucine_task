import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  methodForm: FormGroup;
  mocs: FormArray;
  residueFormCategory: number;
  resultString: string = '';

  ngOnInit() {
    this.methodForm = this.fb.group({
      analyticalMethodId: new FormControl(null,{ validators: Validators.required, updateOn: 'blur' } ),
      targetResidueType: new FormControl(null,{ validators: Validators.required } ),
      reason: new FormControl(null,{ validators: Validators.required, updateOn: 'blur' } ),
    })

    this.onResidueTypeChange();

    this.onChange();
    
  }

  createResidueForm(): FormGroup {
    
    if(this.methodForm.get('residueForm')){
      // this.methodForm.get('residueForm').reset();
      this.methodForm.removeControl('residueForm');
    }

    if(this.methodForm.get('targetResidueType').value === 'api' || this.methodForm.get('targetResidueType').value === 'cleaning_agent') {
      return this.createCat1Form();
    } else {
      return this.createCat2Form();
    } 
  }

  createCat1Form(): FormGroup {
    this.residueFormCategory = 1;
    return new FormGroup({
      lod: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]), updateOn: 'blur'}),
      loq: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0), Validators.pattern("^[0-9]*$")]), updateOn: 'blur'}),
      // swab: this.createSwabForm(),
      // rinse: this.createRinseForm()
    })
  }

  createCat2Form(): FormGroup {
    this.residueFormCategory = 2;
    return new FormGroup({
      methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      limits: new FormControl(false, { validators: Validators.compose([Validators.required, Validators.min(0)])}),
      tntcLimit: new FormControl(null, {validators: Validators.min(0), updateOn: 'blur'}),
      tftcLimit: new FormControl(null, {validators: Validators.min(0), updateOn: 'blur'}),
    })
  }
  onResidueTypeChange(): void {
    this.methodForm.get('targetResidueType').valueChanges.subscribe(val => {
      if(this.methodForm.get('targetResidueType').value) {
        this.methodForm.addControl('residueForm', this.createResidueForm());
      }
    });
  }

  onChange(): void {
    this.methodForm.valueChanges.subscribe(val => {
      console.log(val);
    })
  }

  onSubmit(): void {
    if(this.methodForm.valid) {
      console.log(this.methodForm.value);
      this.resultString = JSON.stringify(this.methodForm.value, null, 2);
    } 
    // else if(this.methodForm.get('residueForm').get('swab').valid || this.methodForm.get('residueForm').get('rinse').valid) {
    //   console.log(this.methodForm.value);
    //   this.resultString = JSON.stringify(this.methodForm.value, null, 2);
    // } 
    else {
      console.log(this.methodForm.get('residueForm').get('lod').valid);
      alert('Please fill all the required fields with correct values');
      console.log(this.findInvalidControls());
    }
  }

   findInvalidControls() {
    const invalid = [];
    const controls = this.methodForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

  residueTypes: Array<any> = [
    {
      name: 'API',
      value: 'api'
    },
    {
      name: 'Cleaning Agent',
      value: 'cleaning_agent'
    },
    {
      name: 'Bioburden',
      value: 'bioburden'
    },
    {
      name: 'Endotoxin',
      value: 'endotoxin'
    }
  ]

}
