import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherGoogleMapComponent } from './afficher-google-map.component';

describe('AfficherGoogleMapComponent', () => {
  let component: AfficherGoogleMapComponent;
  let fixture: ComponentFixture<AfficherGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
