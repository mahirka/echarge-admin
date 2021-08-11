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

        this.editCompanyDataForm.get('name').setValue(data['Charging Station']['name']);
          this.editCompanyDataForm.get('minimum_charging_power').setValue(data['Charging Station']['minimum_charging_power']);
          this.editCompanyDataForm.get('unit_price').setValue(data['Charging Station']['unit_price']);
          this.editCompanyDataForm.get('electricity_supply_type').setValue(data['Charging Station']['electricity_supply_type']);
          this.editCompanyDataForm.get('description').setValue(data['Charging Station']['description']);
          this.editCompanyDataForm.get('plug_type').setValue(data['Charging Station']['plug_type']);
        
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

    console.log("updatePlan")
    console.log(this.editCompanyDataForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateCompanyData(this.machineId,this.editCompanyDataForm.value)

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

    if (this.editCompanyDataForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.editCompanyDataForm.get('minimum_charging_power').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }

    if (this.editCompanyDataForm.get('unit_price').invalid) {
      this.errorMessage = "Please provide a valid price";
      return false;
    }

    if (this.editCompanyDataForm.get('electricity_supply_type').invalid) {
      this.errorMessage = "Please provide a valid supply";
      return false;
    }

    if (this.editCompanyDataForm.get('description').invalid) {
      this.errorMessage = "Please provide a valid description";
      return false;
    }
    if (this.editCompanyDataForm.get('plug_type').invalid) {
      this.errorMessage = "Please provide a valid plug";
      return false;
    }

   
    
    return true
  }


}