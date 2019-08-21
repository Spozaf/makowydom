import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentGalleryComponent } from './apartament-gallery.component';

describe('ApartamentGalleryComponent', () => {
  let component: ApartamentGalleryComponent;
  let fixture: ComponentFixture<ApartamentGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartamentGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
