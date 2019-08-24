import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkolicaGalleryElementComponent } from './okolica-gallery-element.component';

describe('OkolicaGalleryElementComponent', () => {
  let component: OkolicaGalleryElementComponent;
  let fixture: ComponentFixture<OkolicaGalleryElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkolicaGalleryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkolicaGalleryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
