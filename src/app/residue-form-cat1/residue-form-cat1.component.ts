import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-residue-form-cat1',
  templateUrl: './residue-form-cat1.component.html',
  styleUrls: ['./residue-form-cat1.component.scss']
})
export class ResidueFormCat1Component implements OnInit {

  @Input() residueForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.residueForm.addControl('swab', this.createSwabForm());
    this.residueForm.addControl('rinse', this.createRinseForm());
    console.log(this.residueForm.value);
  }

  createSwabForm(): FormGroup {
    return this.fb.group({
      methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      solventName: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      solventQuantity: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      defaultRecovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      // mocs: this.fb.array([ this.createMoc() ])
    })
  }

  createRinseForm(): FormGroup {
    return this.fb.group({
      methodUsed: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      defaultRecovery: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      // mocs: this.fb.array([ this.createMoc() ])
    })
  }

}
