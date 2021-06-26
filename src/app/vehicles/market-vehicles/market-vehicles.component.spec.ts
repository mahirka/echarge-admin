import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketVehiclesComponent } from './market-vehicles.component';

describe('MarketVehiclesComponent', () => {
  let component: MarketVehiclesComponent;
  let fixture: ComponentFixture<MarketVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
