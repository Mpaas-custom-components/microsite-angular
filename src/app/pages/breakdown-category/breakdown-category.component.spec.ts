import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownCategoryComponent } from './breakdown-category.component';

describe('BreakdownCategoryComponent', () => {
  let component: BreakdownCategoryComponent;
  let fixture: ComponentFixture<BreakdownCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakdownCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakdownCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
