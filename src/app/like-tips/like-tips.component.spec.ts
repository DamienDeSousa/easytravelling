import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeTipsComponent } from './like-tips.component';

describe('LikeTipsComponent', () => {
  let component: LikeTipsComponent;
  let fixture: ComponentFixture<LikeTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
