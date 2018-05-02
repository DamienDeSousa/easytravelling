import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherInfosUserComponent } from './afficher-infos-user.component';

describe('AfficherInfosUserComponent', () => {
  let component: AfficherInfosUserComponent;
  let fixture: ComponentFixture<AfficherInfosUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherInfosUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherInfosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
