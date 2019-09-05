import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrakcjeGalleryComponent } from './atrakcje-gallery.component';

describe('AtrakcjeGalleryComponent', () => {
  let component: AtrakcjeGalleryComponent;
  let fixture: ComponentFixture<AtrakcjeGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrakcjeGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrakcjeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
