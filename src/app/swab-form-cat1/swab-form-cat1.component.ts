import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-swab-form-cat1',
  templateUrl: './swab-form-cat1.component.html',
  styleUrls: ['./swab-form-cat1.component.scss']
})
export class SwabFormCat1Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() swabForm: FormGroup;


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.swabForm.addControl('mocs', this.fb.array([ this.createMoc() ]) );
  }

  createMoc(): FormGroup {
    return this.fb.group({
      mocName: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      recovery: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0)]), updateOn: 'blur'}),
    })
  }

  addMoc(): void {
    let mocs = this.swabForm.get('mocs') as FormArray;
    mocs.push( this.createMoc() );
  }

  removeMoc(index): void {
    let mocs = this.swabForm.get('mocs') as FormArray;
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

