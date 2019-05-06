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

  ngOnInit() {
    this.methodForm = this.fb.group({
      analyticalMethodId: new FormControl(null,{ validators: Validators.required, updateOn: 'blur' } ),
      targetResidueType: new FormControl(null,{ validators: Validators.required, updateOn: 'blur' } ),
      reason: new FormControl(null,{ validators: Validators.required, updateOn: 'blur' } ),
    })

    this.onResidueTypeChange();

    this.onChange();
    
  }

  createResidueForm(): FormGroup {
    
    if(this.methodForm.get('residueForm')){
      this.methodForm.get('residueForm').reset();
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
      lod: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      loq: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      // swab: this.createSwabForm(),
      // rinse: this.createRinseForm()
    })
  }

  createCat2Form(): FormGroup {
    this.residueFormCategory = 2;
    return new FormGroup({
      methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      limits: new FormControl(false, { validators: Validators.required}),
    })
  }

  // createSwabForm(): FormGroup {
  //   return this.fb.group({
  //     methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     solventName: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     solventQuantity: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     defaultRecovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     // mocs: this.fb.array([ this.createMoc() ])
  //   })
  // }

  // createRinseForm(): FormGroup {
  //   return this.fb.group({
  //     methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     defaultRecovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     // mocs: this.fb.array([ this.createMoc() ])
  //   })
  // }

  // createMoc(): FormGroup {
  //   return this.fb.group({
  //     moc: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //     recovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
  //   })
  // }

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
    } else {
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
