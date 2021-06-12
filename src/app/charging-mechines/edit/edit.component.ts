import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newChargingMachineForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  machineId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.machineId = this._activatedRoute.snapshot.paramMap.get('machineId');
    this.newChargingMachineForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      minimum_charging_power: new FormControl(null, Validators.required),
      unit_price: new FormControl(null, Validators.required),
      electricity_supply_type: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      plug_type: new FormControl(null, Validators.required),
      

    });

    this._httpService.readById(this.machineId)
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.newChargingMachineForm.get('name').setValue(data['Charging Station']['name']);
          this.newChargingMachineForm.get('minimum_charging_power').setValue(data['Charging Station']['minimum_charging_power']);
          this.newChargingMachineForm.get('unit_price').setValue(data['Charging Station']['unit_price']);
          this.newChargingMachineForm.get('electricity_supply_type').setValue(data['Charging Station']['electricity_supply_type']);
          this.newChargingMachineForm.get('description').setValue(data['Charging Station']['description']);
          this.newChargingMachineForm.get('plug_type').setValue(data['Charging Station']['plug_type']);
        
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.newChargingMachineForm);
    console.log('saved: ' + JSON.stringify(this.newChargingMachineForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateMachine()
      }
    }

  }
  updateMachine() {

    console.log("updatePlan")
    console.log(this.newChargingMachineForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateMachine(this.machineId,this.newChargingMachineForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['status'] == ['OK']) {
            //data['tocken']
           
            this.toastr.success("Machine Updated Successfully");
            this._router.navigate(['/dashboard/charging-machines/view-all']);
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