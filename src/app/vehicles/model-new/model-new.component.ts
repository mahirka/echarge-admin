import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-model-new',
  templateUrl: './model-new.component.html',
  styleUrls: ['./model-new.component.css']
})
export class ModelNewComponent implements OnInit {

  newVehicleModelForm: FormGroup;
  errorMessage = null;
  isLoading = false;

  constructor(private toastr: ToastrService, private store: Store<State>,  private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    

    this.newVehicleModelForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
      vehicle_make: new FormControl(null, Validators.required),
     
      
      

    });
  }
  save() {
    console.log(this.newVehicleModelForm);
    console.log('saved: ' + JSON.stringify(this.newVehicleModelForm.value));
  }

  submit() {

    if(!this.isLoading){
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.createModel()
      }
    }

  }
  createModel() {

    console.log("createMachine")
    console.log(this.newVehicleModelForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    this._httpService.createBrand(this.newVehicleModelForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['id'] != null) {
            //data['tocken']
            localStorage.setItem('id', data['id']);
            this.toastr.success("New Machine Created Successfully");
            this._router.navigate(['/dashboard/vehicles/vehicle-models'])
            
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

    if (this.newVehicleModelForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newVehicleModelForm.get('vehicle_type').invalid) {
      this.errorMessage = "Please provide a valid Vehicle";
      return false;
    }
    if (this.newVehicleModelForm.get('vehicle_make').invalid) {
      this.errorMessage = "Please provide a valid Vehicle Make";
      return false;
    }
   
    
    return true
  }

}
