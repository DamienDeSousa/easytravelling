import { TestBed, inject } from '@angular/core/testing';

import { AfficherTipsService } from './afficher-tips.service';

describe('AfficherTipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfficherTipsService]
    });
  });

  it('should be created', inject([AfficherTipsService], (service: AfficherTipsService) => {
    expect(service).toBeTruthy();
  }));
});
