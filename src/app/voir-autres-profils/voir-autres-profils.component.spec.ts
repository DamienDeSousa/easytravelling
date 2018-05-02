import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirAutresProfilsComponent } from './voir-autres-profils.component';

describe('VoirAutresProfilsComponent', () => {
  let component: VoirAutresProfilsComponent;
  let fixture: ComponentFixture<VoirAutresProfilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirAutresProfilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirAutresProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
