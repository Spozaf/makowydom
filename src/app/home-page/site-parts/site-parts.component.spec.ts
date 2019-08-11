import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePartsComponent } from './site-parts.component';

describe('SitePartsComponent', () => {
  let component: SitePartsComponent;
  let fixture: ComponentFixture<SitePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
