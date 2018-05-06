import { TestBed, inject } from '@angular/core/testing';

import { AfficherTipsFavorisService } from './afficher-tips-favoris.service';

describe('AfficherTipsFavorisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfficherTipsFavorisService]
    });
  });

  it('should be created', inject([AfficherTipsFavorisService], (service: AfficherTipsFavorisService) => {
    expect(service).toBeTruthy();
  }));
});
