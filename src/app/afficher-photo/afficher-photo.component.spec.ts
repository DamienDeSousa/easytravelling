import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherPhotoComponent } from './afficher-photo.component';

describe('AfficherPhotoComponent', () => {
  let component: AfficherPhotoComponent;
  let fixture: ComponentFixture<AfficherPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
