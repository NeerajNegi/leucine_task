import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-residue-form-cat2',
  templateUrl: './residue-form-cat2.component.html',
  styleUrls: ['./residue-form-cat2.component.scss']
})
export class ResidueFormCat2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() residueForm: FormGroup;

  ngOnInit() {
    this.onRadioChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.residueForm.addControl('swab', this.createSwabForm());
    this.residueForm.addControl('rinse', this.createRinseForm());
    console.log(this.residueForm.value);
  }

  createSwabForm(): FormGroup {
    return this.fb.group({
      recoveryForSwab: new FormControl(true, { validators: Validators.required}),
      defaultRecovery: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0)]), updateOn: 'blur',}),
    })
  }

  createRinseForm(): FormGroup {
    return this.fb.group({
      solventVolume: new FormControl(null, { validators: Validators.required, updateOn: 'blur'}),
      recoveryForSwab: new FormControl(true, { validators: Validators.compose([Validators.required, Validators.min(0)])}),
      defaultRecovery: new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0)]), updateOn: 'blur'}),
    })
  }


  onRadioChange(): void {
    this.residueForm.get('limits').valueChanges.subscribe(val => {
      if(val) {
        this.residueForm.addControl('tntcLimit', new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0)]), updateOn: 'blur'}));
        this.residueForm.addControl('tftcLimit', new FormControl(null, { validators: Validators.compose([Validators.required, Validators.min(0)]), updateOn: 'blur'}))
      } else {
        this.residueForm.removeControl('tntcLimit');
        this.residueForm.removeControl('tftcLimit');
      }
    })
  }

}
