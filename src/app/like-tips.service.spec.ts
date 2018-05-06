import { TestBed, inject } from '@angular/core/testing';

import { LikeTipsService } from './like-tips.service';

describe('LikeTipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LikeTipsService]
    });
  });

  it('should be created', inject([LikeTipsService], (service: LikeTipsService) => {
    expect(service).toBeTruthy();
  }));
});
