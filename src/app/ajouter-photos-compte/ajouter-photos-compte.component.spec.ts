import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPhotosCompteComponent } from './ajouter-photos-compte.component';

describe('AjouterPhotosCompteComponent', () => {
  let component: AjouterPhotosCompteComponent;
  let fixture: ComponentFixture<AjouterPhotosCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPhotosCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPhotosCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
