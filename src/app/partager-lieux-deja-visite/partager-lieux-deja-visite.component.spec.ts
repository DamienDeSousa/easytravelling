import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartagerLieuxDejaVisiteComponent } from './partager-lieux-deja-visite.component';

describe('PartagerLieuxDejaVisiteComponent', () => {
  let component: PartagerLieuxDejaVisiteComponent;
  let fixture: ComponentFixture<PartagerLieuxDejaVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartagerLieuxDejaVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartagerLieuxDejaVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
