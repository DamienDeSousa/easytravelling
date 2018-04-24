import { TestBed, inject } from '@angular/core/testing';

import { TrierParCategorieService } from './trier-par-categorie.service';

describe('TrierParCategorieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrierParCategorieService]
    });
  });

  it('should be created', inject([TrierParCategorieService], (service: TrierParCategorieService) => {
    expect(service).toBeTruthy();
  }));
});
