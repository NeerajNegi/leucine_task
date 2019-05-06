import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwabFormCat1Component } from './swab-form-cat1.component';

describe('SwabFormCat1Component', () => {
  let component: SwabFormCat1Component;
  let fixture: ComponentFixture<SwabFormCat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwabFormCat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwabFormCat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
