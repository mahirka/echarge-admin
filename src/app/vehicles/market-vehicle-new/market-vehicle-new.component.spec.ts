import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketVehicleNewComponent } from './market-vehicle-new.component';

describe('MarketVehicleNewComponent', () => {
  let component: MarketVehicleNewComponent;
  let fixture: ComponentFixture<MarketVehicleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketVehicleNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketVehicleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
