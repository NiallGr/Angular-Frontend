import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemDetailsComponent } from './fooditem-details.component';

describe('FooditemDetailsComponent', () => {
  let component: FooditemDetailsComponent;
  let fixture: ComponentFixture<FooditemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooditemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
