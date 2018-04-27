import { TestBed, inject } from '@angular/core/testing';

import { EditerProfilService } from './editer-profil.service';

describe('EditerProfilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditerProfilService]
    });
  });

  it('should be created', inject([EditerProfilService], (service: EditerProfilService) => {
    expect(service).toBeTruthy();
  }));
});
