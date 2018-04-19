import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheLieuxComponent } from './recherche-lieux.component';

describe('RechercheLieuxComponent', () => {
  let component: RechercheLieuxComponent;
  let fixture: ComponentFixture<RechercheLieuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheLieuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
