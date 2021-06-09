import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newChargingStationForm: FormGroup;
  errorMessage = null;
  isLoading = false;

  constructor(private toastr: ToastrService, private store: Store<State>, private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {

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
  }
  save() {
    console.log(this.newChargingStationForm);
    console.log('saved: ' + JSON.stringify(this.newChargingStationForm.value));
  }

  submit() {

    if(!this.isLoading){
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.createStation()
      }
    }

  }
  createStation() {

    console.log("createStation")
    console.log(this.newChargingStationForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    this._httpService.createStation(this.newChargingStationForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['id'] != null) {
            //data['tocken']
            localStorage.setItem('id', data['id']);
            this.toastr.success("New station Created Successfully");
            this._router.navigate(['/dashboard/charging-stations/view-all'])
            
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
