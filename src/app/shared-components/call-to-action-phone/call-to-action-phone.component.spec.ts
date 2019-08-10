import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionPhoneComponent } from './call-to-action-phone.component';

describe('CallToActionPhoneComponent', () => {
  let component: CallToActionPhoneComponent;
  let fixture: ComponentFixture<CallToActionPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
