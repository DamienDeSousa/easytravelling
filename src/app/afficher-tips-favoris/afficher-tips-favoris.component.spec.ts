import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTipsFavorisComponent } from './afficher-tips-favoris.component';

describe('AfficherTipsFavorisComponent', () => {
  let component: AfficherTipsFavorisComponent;
  let fixture: ComponentFixture<AfficherTipsFavorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherTipsFavorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTipsFavorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
