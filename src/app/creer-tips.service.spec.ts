import { TestBed, inject } from '@angular/core/testing';

import { CreerTipsService } from './creer-tips.service';

describe('CreerTipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreerTipsService]
    });
  });

  it('should be created', inject([CreerTipsService], (service: CreerTipsService) => {
    expect(service).toBeTruthy();
  }));
});
