import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFooditemComponent } from './update-fooditem.component';

describe('UpdateFooditemComponent', () => {
  let component: UpdateFooditemComponent;
  let fixture: ComponentFixture<UpdateFooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
