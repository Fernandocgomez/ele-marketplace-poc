import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedMonthlyUsageFilterComponent } from './estimated-monthly-usage-filter.component';

describe('EstimatedMonthlyUsageFilterComponent', () => {
  let component: EstimatedMonthlyUsageFilterComponent;
  let fixture: ComponentFixture<EstimatedMonthlyUsageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedMonthlyUsageFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedMonthlyUsageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
