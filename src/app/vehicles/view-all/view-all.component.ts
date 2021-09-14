import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  motorDetailsToShow:any[]=[ ]
  carDetailsToShow:any[]=[ ]
  autoDetailsToShow:any[]=[ ]
  name: string = ""
  plug_types: string = ""
  battery_capacity: string = ""
  

  vehicles = []
  isLoading = false;

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getvehicleDetails()
   this.isLoading = true;
 
  }
  getvehicleDetails(){
    this._httpService.getvehicleDetails()
    
    .subscribe(
      data => {
        console.log("vehicleDetails")
        this.isLoading = false;
          console.log(data)
      
      this.motorDetailsToShow = data["Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "bike" 
      )
      this.name = data['Vehicles'][0]['name']
      this.plug_types = data['Vehicles'][0]['plug_types']
      this.battery_capacity = data['Vehicles'][0]['battery_capacity']

      this.carDetailsToShow = data["Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "car" 
      )
      this.name = data['Vehicles'][0]['name']
      this.plug_types = data['Vehicles'][0]['plug_types']
      this.battery_capacity = data['Vehicles'][0]['battery_capacity']

      this.autoDetailsToShow = data["Vehicles"].filter(vehicle=>    
        vehicle.vehicle_type == "auto" 
      )
      this.name = data['Vehicles'][0]['name']
      this.plug_types = data['Vehicles'][0]['plug_types']
      this.battery_capacity = data['Vehicles'][0]['battery_capacity']
      
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
 

 




}
