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

  editCompanyDataForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  machineId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.machineId = this._activatedRoute.snapshot.paramMap.get('machineId');
    this.editCompanyDataForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      company_service_charge: new FormControl(null, Validators.required),
      bike_plug_types: new FormControl(null, Validators.required),
      car_plug_types: new FormControl(null, Validators.required),
      auto_plug_types: new FormControl(null, Validators.required),
      auto_minimum_charging_power: new FormControl(null, Validators.required),
      car_minimum_charging_power: new FormControl(null, Validators.required),
      bike_minimum_charging_power: new FormControl(null, Validators.required),
      auto_maximum_charging_power: new FormControl(null, Validators.required),
      car_maximum_charging_power: new FormControl(null, Validators.required),
      bike_maximum_charging_power: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      website: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      
      
      

    });

    this._httpService.readById()
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.editCompanyDataForm.get('name').setValue(data['Company']['name']);
          this.editCompanyDataForm.get('company_service_charge').setValue(data['Company']['company_service_charge']);
          this.editCompanyDataForm.get('bike_plug_types').setValue(data['Company']['bike_plug_types']);
          this.editCompanyDataForm.get('car_plug_types').setValue(data['Company']['car_plug_types']);
          this.editCompanyDataForm.get('auto_plug_types').setValue(data['Company']['auto_plug_types']);
          this.editCompanyDataForm.get('auto_minimum_charging_power').setValue(data['Company']['auto_minimum_charging_power']);
          this.editCompanyDataForm.get('car_minimum_charging_power').setValue(data['Company']['car_minimum_charging_power']);
          this.editCompanyDataForm.get('bike_minimum_charging_power').setValue(data['Company']['bike_minimum_charging_power']);
          this.editCompanyDataForm.get('auto_maximum_charging_power').setValue(data['Company']['auto_maximum_charging_power']);
          this.editCompanyDataForm.get('car_maximum_charging_power').setValue(data['Company']['car_maximum_charging_power']);
          this.editCompanyDataForm.get('bike_maximum_charging_power').setValue(data['Company']['bike_maximum_charging_power']);
          this.editCompanyDataForm.get('email').setValue(data['Company']['email']);
          this.editCompanyDataForm.get('website').setValue(data['Company']['website']);
          this.editCompanyDataForm.get('mobile').setValue(data['Company']['mobile']);
          this.editCompanyDataForm.get('address').setValue(data['Company']['address']);
          this.editCompanyDataForm.get('country').setValue(data['Company']['country']);
          this.editCompanyDataForm.get('zipcode').setValue(data['Company']['zipcode']);
          this.editCompanyDataForm.get('state').setValue(data['Company']['state']);
          this.editCompanyDataForm.get('street').setValue(data['Company']['street']);
          this.editCompanyDataForm.get('city').setValue(data['Company']['city']);
        
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.editCompanyDataForm);
    console.log('saved: ' + JSON.stringify(this.editCompanyDataForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateCompanyData()
      }
    }

  }
  updateCompanyData() {

    console.log("updateData")
    console.log(this.editCompanyDataForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateCompanyData(this.editCompanyDataForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['status'] == ['OK']) {
            //data['tocken']
           
            this.toastr.success("Data Updated Successfully");
            this._router.navigate(['/dashboard/company-data/view-all']);
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

    if (this.editCompanyDataForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.editCompanyDataForm.get('company_service_charge').invalid) {
      this.errorMessage = "Please provide a valid charge";
      return false;
    }

    if (this.editCompanyDataForm.get('bike_plug_types').invalid) {
      this.errorMessage = "Please provide a valid types";
      return false;
    }

    if (this.editCompanyDataForm.get('car_plug_types').invalid) {
      this.errorMessage = "Please provide a valid types";
      return false;
    }

    if (this.editCompanyDataForm.get('auto_plug_types').invalid) {
      this.errorMessage = "Please provide a valid types";
      return false;
    }
    if (this.editCompanyDataForm.get('auto_minimum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('car_minimum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('bike_minimum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('auto_maximum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('car_maximum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('bike_maximum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
    if (this.editCompanyDataForm.get('email').invalid) {
      this.errorMessage = "Please provide a valid email";
      return false;
    }
    if (this.editCompanyDataForm.get('website').invalid) {
      this.errorMessage = "Please provide a valid website";
      return false;
    }
    if (this.editCompanyDataForm.get('mobile').invalid) {
      this.errorMessage = "Please provide a valid mobile";
      return false;
    }
    if (this.editCompanyDataForm.get('address').invalid) {
      this.errorMessage = "Please provide a valid address";
      return false;
    }
    if (this.editCompanyDataForm.get('country').invalid) {
      this.errorMessage = "Please provide a valid country";
      return false;
    }
    if (this.editCompanyDataForm.get('zipcode').invalid) {
      this.errorMessage = "Please provide a valid zipcode";
      return false;
    }
    if (this.editCompanyDataForm.get('state').invalid) {
      this.errorMessage = "Please provide a valid state";
      return false;
    }
    if (this.editCompanyDataForm.get('street').invalid) {
      this.errorMessage = "Please provide a valid street";
      return false;
    }
    if (this.editCompanyDataForm.get('city').invalid) {
      this.errorMessage = "Please provide a valid city";
      return false;
    }

   
    
    return true
  }


}