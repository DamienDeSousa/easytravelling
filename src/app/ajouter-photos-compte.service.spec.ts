import { TestBed, inject } from '@angular/core/testing';

import { AjouterPhotosCompteService } from './ajouter-photos-compte.service';

describe('AjouterPhotosCompteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjouterPhotosCompteService]
    });
  });

  it('should be created', inject([AjouterPhotosCompteService], (service: AjouterPhotosCompteService) => {
    expect(service).toBeTruthy();
  }));
});
