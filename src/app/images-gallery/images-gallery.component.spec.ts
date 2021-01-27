import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGalleryComponent } from './images-gallery.component';

describe('ImagesGalleryComponent', () => {
  let component: ImagesGalleryComponent;
  let fixture: ComponentFixture<ImagesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
