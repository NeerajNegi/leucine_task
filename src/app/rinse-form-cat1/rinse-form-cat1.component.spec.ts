import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RinseFormCat1Component } from './rinse-form-cat1.component';

describe('RinseFormCat1Component', () => {
  let component: RinseFormCat1Component;
  let fixture: ComponentFixture<RinseFormCat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RinseFormCat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RinseFormCat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
