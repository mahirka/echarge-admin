import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newChargingStationForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  stationId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.stationId = this._activatedRoute.snapshot.paramMap.get('stationId');
    this.newChargingStationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),
      longitude: new FormControl(null, Validators.required),
      latitude: new FormControl(null, Validators.required),
      

    });

    this._httpService.readById(this.stationId)
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.newChargingStationForm.get('name').setValue(data['Charging Station']['name']);
          this.newChargingStationForm.get('city').setValue(data['Charging Station']['city']);
          this.newChargingStationForm.get('street').setValue(data['Charging Station']['street']);
          this.newChargingStationForm.get('state').setValue(data['Charging Station']['state']);
          this.newChargingStationForm.get('country').setValue(data['Charging Station']['country']);
          this.newChargingStationForm.get('address').setValue(data['Charging Station']['address']);
          this.newChargingStationForm.get('zipcode').setValue(data['Charging Station']['zipcode']);
          this.newChargingStationForm.get('longitude').setValue(data['Charging Station']['longitude']);
          this.newChargingStationForm.get('latitude').setValue(data['Charging Station']['latitude']);
          
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.newChargingStationForm);
    console.log('saved: ' + JSON.stringify(this.newChargingStationForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateStation()
      }
    }

  }
  updateStation() {

    console.log("updatePlan")
    console.log(this.newChargingStationForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateStation(this.stationId,this.newChargingStationForm.value)

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

    if (this.newChargingStationForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newChargingStationForm.get('city').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newChargingStationForm.get('street').invalid) {
      this.errorMessage = "Please provide a valid street";
      return false;
    }

    if (this.newChargingStationForm.get('state').invalid) {
      this.errorMessage = "Please provide a valid state";
      return false;
    }

    if (this.newChargingStationForm.get('country').invalid) {
      this.errorMessage = "Please provide a valid country";
      return false;
    }
    if (this.newChargingStationForm.get('address').invalid) {
      this.errorMessage = "Please provide a valid address";
      return false;
    }

    if (this.newChargingStationForm.get('zipcode').invalid) {
      this.errorMessage = "Please provide a valid zipcode";
      return false;
    }
    if (this.newChargingStationForm.get('longitude').invalid) {
      this.errorMessage = "Please provide a valid longitude";
      return false;
    }
    if (this.newChargingStationForm.get('latitude').invalid) {
      this.errorMessage = "Please provide a valid latitude";
      return false;
    }
    
    return true
  }


}
