import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkolicaMiejsceComponent } from './okolica-miejsce.component';

describe('OkolicaMiejsceComponent', () => {
  let component: OkolicaMiejsceComponent;
  let fixture: ComponentFixture<OkolicaMiejsceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkolicaMiejsceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkolicaMiejsceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
