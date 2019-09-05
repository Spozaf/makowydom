import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrakcjeGalleryElementComponent } from './atrakcje-gallery-element.component';

describe('AtrakcjeGalleryElementComponent', () => {
  let component: AtrakcjeGalleryElementComponent;
  let fixture: ComponentFixture<AtrakcjeGalleryElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrakcjeGalleryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrakcjeGalleryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
