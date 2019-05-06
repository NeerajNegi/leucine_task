import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidueFormCat1Component } from './residue-form-cat1.component';

describe('ResidueFormCat1Component', () => {
  let component: ResidueFormCat1Component;
  let fixture: ComponentFixture<ResidueFormCat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidueFormCat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidueFormCat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
