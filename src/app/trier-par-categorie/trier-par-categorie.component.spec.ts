import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrierParCategorieComponent } from './trier-par-categorie.component';

describe('TrierParCategorieComponent', () => {
  let component: TrierParCategorieComponent;
  let fixture: ComponentFixture<TrierParCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrierParCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrierParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
