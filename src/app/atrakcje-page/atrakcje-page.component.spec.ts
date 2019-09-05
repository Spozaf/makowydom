import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrakcjePageComponent } from './atrakcje-page.component';

describe('AtrakcjePageComponent', () => {
  let component: AtrakcjePageComponent;
  let fixture: ComponentFixture<AtrakcjePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrakcjePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrakcjePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
