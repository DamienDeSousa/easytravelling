import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTipsComponent } from './afficher-tips.component';

describe('AfficherTipsComponent', () => {
  let component: AfficherTipsComponent;
  let fixture: ComponentFixture<AfficherTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
