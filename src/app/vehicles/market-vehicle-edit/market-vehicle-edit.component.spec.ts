import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketVehicleEditComponent } from './market-vehicle-edit.component';

describe('MarketVehicleEditComponent', () => {
  let component: MarketVehicleEditComponent;
  let fixture: ComponentFixture<MarketVehicleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketVehicleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketVehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
