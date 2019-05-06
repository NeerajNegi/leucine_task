import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwabFormCat2Component } from './swab-form-cat2.component';

describe('SwabFormCat2Component', () => {
  let component: SwabFormCat2Component;
  let fixture: ComponentFixture<SwabFormCat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwabFormCat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwabFormCat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
