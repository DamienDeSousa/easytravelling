import { TestBed, inject } from '@angular/core/testing';

import { AfficherPhotoService } from './afficher-photo.service';

describe('AfficherPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfficherPhotoService]
    });
  });

  it('should be created', inject([AfficherPhotoService], (service: AfficherPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
