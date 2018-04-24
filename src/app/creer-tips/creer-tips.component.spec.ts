import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTipsComponent } from './creer-tips.component';

describe('CreerTipsComponent', () => {
  let component: CreerTipsComponent;
  let fixture: ComponentFixture<CreerTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
