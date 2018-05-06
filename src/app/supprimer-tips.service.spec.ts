import { TestBed, inject } from '@angular/core/testing';

import { SupprimerTipsService } from './supprimer-tips.service';

describe('SupprimerTipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupprimerTipsService]
    });
  });

  it('should be created', inject([SupprimerTipsService], (service: SupprimerTipsService) => {
    expect(service).toBeTruthy();
  }));
});
