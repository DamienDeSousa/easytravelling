import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVisitePlusTardComponent } from './a-visite-plus-tard.component';

describe('AVisitePlusTardComponent', () => {
  let component: AVisitePlusTardComponent;
  let fixture: ComponentFixture<AVisitePlusTardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVisitePlusTardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVisitePlusTardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
