import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerTipsComponent } from './supprimer-tips.component';

describe('SupprimerTipsComponent', () => {
  let component: SupprimerTipsComponent;
  let fixture: ComponentFixture<SupprimerTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
