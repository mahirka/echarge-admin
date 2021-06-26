import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-market-vehicle-new',
  templateUrl: './market-vehicle-new.component.html',
  styleUrls: ['./market-vehicle-new.component.css']
})
export class MarketVehicleNewComponent implements OnInit {

 
  newMarketVehicleForm: FormGroup;
  errorMessage = null;
  isLoading = false;

  constructor(private toastr: ToastrService, private store: Store<State>,  private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    

    this.newMarketVehicleForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
      plug_type: new FormControl(null, Validators.required),
      charging_power: new FormControl(null, Validators.required),
      battery_capacity: new FormControl(null, Validators.required),
     
      
      

    });
  }
  save() {
    console.log(this.newMarketVehicleForm);
    console.log('saved: ' + JSON.stringify(this.newMarketVehicleForm.value));
  }

  submit() {

    if(!this.isLoading){
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.createMarketVehicle()
      }
    }

  }
  createMarketVehicle() {

    console.log("createMarketVehicle")
    console.log(this.newMarketVehicleForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    this._httpService.createMarketVehicle(this.newMarketVehicleForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['id'] != null) {
            //data['tocken']
            localStorage.setItem('id', data['id']);
            this.toastr.success("New Machine Created Successfully");
            this._router.navigate(['/dashboard/vehicles/market-vehicles'])
            
          }

        },

        error => {
          console.log("errors reached")
          console.log(error)

          this.isLoading = false;
          this.errorMessage = error.error;
        },

      );
  }
  checkIfFormValid() {

    if (this.newMarketVehicleForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newMarketVehicleForm.get('vehicle_type').invalid) {
      this.errorMessage = "Please provide a valid Vehicle";
      return false;
    }
    if (this.newMarketVehicleForm.get('plug_type').invalid) {
      this.errorMessage = "Please provide a valid Plug Type";
      return false;
    }
    if (this.newMarketVehicleForm.get('charging_power').invalid) {
      this.errorMessage = "Please provide a Power";
      return false;
    }
    if (this.newMarketVehicleForm.get('battery_capacity').invalid) {
      this.errorMessage = "Please provide a valid Battery Capacity";
      return false;
    }
   
   
    
    return true
  }

}