import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreertipsComponent } from './creertips.component';

describe('CreertipsComponent', () => {
  let component: CreertipsComponent;
  let fixture: ComponentFixture<CreertipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreertipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreertipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
