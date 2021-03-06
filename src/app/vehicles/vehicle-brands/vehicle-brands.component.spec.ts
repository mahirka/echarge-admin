import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBrandsComponent } from './vehicle-brands.component';

describe('VehicleBrandsComponent', () => {
  let component: VehicleBrandsComponent;
  let fixture: ComponentFixture<VehicleBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
