import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-market-vehicles',
  templateUrl: './market-vehicles.component.html',
  styleUrls: ['./market-vehicles.component.css']
})
export class MarketVehiclesComponent implements OnInit {

  motorDetailsToShow:any[]=[ ]
  carDetailsToShow:any[]=[ ]
  autoDetailsToShow:any[]=[ ]
  name: string = ""
  plug_type: string = ""
  battery_capacity: string = ""
  

  vehicles = []
  isLoading = false;

  constructor(private toastr: ToastrService,private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getmarketVehicleDetails()
   this.isLoading = true;
 
  }
  getmarketVehicleDetails(){
    this._httpService.getmarketVehicleDetails()
    
    .subscribe(
      data => {
        console.log("MarketVehicleDetails")
        this.isLoading = false;
          console.log(data)
      
      this.motorDetailsToShow = data["Market Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "bike" 
      )
      this.name = data['Market Vehicles'][0]['name']
      this.plug_type = data['Market Vehicles'][0]['plug_type']
      this.battery_capacity = data['Market Vehicles'][0]['battery_capacity']

      this.carDetailsToShow = data["Market Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "car" 
      )
      this.name = data['Market Vehicles'][0]['name']
      this.plug_type = data['Market Vehicles'][0]['plug_type']
      this.battery_capacity = data['Market Vehicles'][0]['battery_capacity']

      this.autoDetailsToShow = data["Market Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "auto" 
      )
      this.name = data['Market Vehicles'][0]['name']
      this.plug_type = data['Market Vehicles'][0]['plug_type']
      this.battery_capacity = data['Market Vehicles'][0]['battery_capacity']
      
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }

  deleteMarketVehicle(marketVehicleId) {

    if (confirm("Are you sure to delete ")) {

    this._httpService.deleteMarketVehicle(marketVehicleId)
      .subscribe(

        data => {
          if (data['status'] == 'OK') {
            this.toastr.success("Market Vehicle Deleted Successfully", "Success");

            this.getmarketVehicleDetails()
          }


        },

        error => {
          this.toastr.error("Could you please try again?", error.error,);

        },

      );

    }
  }
 
  btnClick() {
    this._router.navigateByUrl('/dashboard/vehicles/market-vehicle-new');
};
 




}
