import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLieuPartageComponent } from './ajouter-lieu-partage.component';

describe('AjouterLieuPartageComponent', () => {
  let component: AjouterLieuPartageComponent;
  let fixture: ComponentFixture<AjouterLieuPartageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLieuPartageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLieuPartageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
