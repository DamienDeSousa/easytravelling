import { TestBed, inject } from '@angular/core/testing';

import { AVisitePlusTardService } from './a-visite-plus-tard.service';

describe('AVisitePlusTardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AVisitePlusTardService]
    });
  });

  it('should be created', inject([AVisitePlusTardService], (service: AVisitePlusTardService) => {
    expect(service).toBeTruthy();
  }));
});
