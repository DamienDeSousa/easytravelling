import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLieuFavorisComponent } from './ajouter-lieu-favoris.component';

describe('AjouterLieuFavorisComponent', () => {
  let component: AjouterLieuFavorisComponent;
  let fixture: ComponentFixture<AjouterLieuFavorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLieuFavorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLieuFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
