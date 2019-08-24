import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkolicaGalleryComponent } from './okolica-gallery.component';

describe('OkolicaGalleryComponent', () => {
  let component: OkolicaGalleryComponent;
  let fixture: ComponentFixture<OkolicaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkolicaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkolicaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
