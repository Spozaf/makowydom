import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlaGosciPageComponent } from './dla-gosci-page.component';

describe('DlaGosciPageComponent', () => {
  let component: DlaGosciPageComponent;
  let fixture: ComponentFixture<DlaGosciPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlaGosciPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlaGosciPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
