import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionMailComponent } from './call-to-action-mail.component';

describe('CallToActionMailComponent', () => {
  let component: CallToActionMailComponent;
  let fixture: ComponentFixture<CallToActionMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
