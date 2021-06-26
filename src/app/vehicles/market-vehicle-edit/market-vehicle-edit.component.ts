import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-market-vehicle-edit',
  templateUrl: './market-vehicle-edit.component.html',
  styleUrls: ['./market-vehicle-edit.component.css']
})
export class MarketVehicleEditComponent implements OnInit {

  newMarketVehicleForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  marketVehicleId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.marketVehicleId = this._activatedRoute.snapshot.paramMap.get('marketVehicleId');
    this.newMarketVehicleForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
      plug_type: new FormControl(null, Validators.required),
      charging_power: new FormControl(null, Validators.required),
      battery_capacity: new FormControl(null, Validators.required),
     
      

    });

    this._httpService.readByMarketVehicleId(this.marketVehicleId)
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.newMarketVehicleForm.get('name').setValue(data['Market Vehicles']['name']);
          this.newMarketVehicleForm.get('vehicle_type').setValue(data['Market Vehicles']['vehicle_type']);
          this.newMarketVehicleForm.get('plug_type').setValue(data['Market Vehicles']['plug_type']);
          this.newMarketVehicleForm.get('charging_power').setValue(data['Market Vehicles']['charging_power']);
          this.newMarketVehicleForm.get('battery_capacity').setValue(data['Market Vehicles']['battery_capacity']);
          
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.newMarketVehicleForm);
    console.log('saved: ' + JSON.stringify(this.newMarketVehicleForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateMarketVehicle()
      }
    }

  }
  updateMarketVehicle() {

    console.log("updatePlan")
    console.log(this.newMarketVehicleForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateMarketVehicle(this.marketVehicleId,this.newMarketVehicleForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['status'] == ['OK']) {
            //data['tocken']
           
            this.toastr.success("Station Updated Successfully");
            this._router.navigate(['/dashboard/charging-stations/view-all']);
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
