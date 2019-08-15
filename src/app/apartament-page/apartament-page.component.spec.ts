import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentPageComponent } from './apartament-page.component';

describe('ApartamentPageComponent', () => {
  let component: ApartamentPageComponent;
  let fixture: ComponentFixture<ApartamentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
