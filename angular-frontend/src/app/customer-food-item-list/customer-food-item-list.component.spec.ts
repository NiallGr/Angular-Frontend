import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFoodItemListComponent } from './customer-food-item-list.component';

describe('CustomerFoodItemListComponent', () => {
  let component: CustomerFoodItemListComponent;
  let fixture: ComponentFixture<CustomerFoodItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFoodItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFoodItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
