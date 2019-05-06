import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidueFormCat2Component } from './residue-form-cat2.component';

describe('ResidueFormCat2Component', () => {
  let component: ResidueFormCat2Component;
  let fixture: ComponentFixture<ResidueFormCat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidueFormCat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidueFormCat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
