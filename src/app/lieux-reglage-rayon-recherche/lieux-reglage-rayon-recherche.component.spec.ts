import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxReglageRayonRechercheComponent } from './lieux-reglage-rayon-recherche.component';

describe('LieuxReglageRayonRechercheComponent', () => {
  let component: LieuxReglageRayonRechercheComponent;
  let fixture: ComponentFixture<LieuxReglageRayonRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxReglageRayonRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuxReglageRayonRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
