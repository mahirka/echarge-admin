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
  newChargingMachineForm: FormGroup;
  errorMessage = null;
  isLoading = false;

  constructor(private toastr: ToastrService, private store: Store<State>,  private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    

    this.newChargingMachineForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      minimum_charging_power: new FormControl(null, Validators.required),
      unit_price: new FormControl(null, Validators.required),
      electricity_supply_type: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      plug_type: new FormControl(null, Validators.required),
      
      

    });
  }
  save() {
    console.log(this.newChargingMachineForm);
    console.log('saved: ' + JSON.stringify(this.newChargingMachineForm.value));
  }

  submit() {

    if(!this.isLoading){
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.createMachine()
      }
    }

  }
  createMachine() {

    console.log("createMachine")
    console.log(this.newChargingMachineForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    this._httpService.createMachine(this.newChargingMachineForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['id'] != null) {
            //data['tocken']
            localStorage.setItem('id', data['id']);
            this.toastr.success("New Machine Created Successfully");
            this._router.navigate(['/dashboard/charging-machines/view-all'])
            
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

    if (this.newChargingMachineForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newChargingMachineForm.get('minimum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }

    if (this.newChargingMachineForm.get('unit_price').invalid) {
      this.errorMessage = "Please provide a valid price";
      return false;
    }

    if (this.newChargingMachineForm.get('electricity_supply_type').invalid) {
      this.errorMessage = "Please provide a valid supply";
      return false;
    }

    if (this.newChargingMachineForm.get('description').invalid) {
      this.errorMessage = "Please provide a valid description";
      return false;
    }
    if (this.newChargingMachineForm.get('plug_type').invalid) {
      this.errorMessage = "Please provide a valid plug";
      return false;
    }

   
    
    return true
  }

}
