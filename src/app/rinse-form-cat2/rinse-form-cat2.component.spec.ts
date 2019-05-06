import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinseFormCat2Component } from './rinse-form-cat2.component';

describe('RinseFormCat2Component', () => {
  let component: RinseFormCat2Component;
  let fixture: ComponentFixture<RinseFormCat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinseFormCat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinseFormCat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
