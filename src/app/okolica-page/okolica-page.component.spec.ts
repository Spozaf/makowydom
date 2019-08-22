import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkolicaPageComponent } from './okolica-page.component';

describe('OkolicaPageComponent', () => {
  let component: OkolicaPageComponent;
  let fixture: ComponentFixture<OkolicaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkolicaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkolicaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
