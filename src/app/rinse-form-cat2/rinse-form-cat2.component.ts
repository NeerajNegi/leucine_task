import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-rinse-form-cat2',
  templateUrl: './rinse-form-cat2.component.html',
  styleUrls: ['./rinse-form-cat2.component.scss']
})
export class RinseFormCat2Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  
  @Input() rinseForm: FormGroup;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rinseForm.addControl('mocs', this.fb.array([ this.createMoc() ]) );
  }

  createMoc(): FormGroup {
    return this.fb.group({
      mocName: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      recovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
    })
  }

  addMoc(): void {
    let mocs = this.rinseForm.get('mocs') as FormArray;
    mocs.push( this.createMoc() );
  }

  removeMoc(index): void {
    let mocs = this.rinseForm.get('mocs') as FormArray;
    mocs.removeAt(index)
  }

  mocTypes: Array<any> = [
    {
      name: 'Stainless Steel',
      value: 'stainless_steel'
    },
    {
      name: 'Glass',
      value: 'glass'
    },
    {
      name: 'Teflon',
      value: 'teflon'
    },
    {
      name: 'Plastic',
      value: 'plastic'
    }
  ]

}
