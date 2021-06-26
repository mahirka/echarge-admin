import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-brand-new',
  templateUrl: './brand-new.component.html',
  styleUrls: ['./brand-new.component.css']
})
export class BrandNewComponent implements OnInit {
  newVehicleBrandForm: FormGroup;
  errorMessage = null;
  isLoading = false;

  constructor(private toastr: ToastrService, private store: Store<State>,  private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    

    this.newVehicleBrandForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
     
      
      

    });
  }
  save() {
    console.log(this.newVehicleBrandForm);
    console.log('saved: ' + JSON.stringify(this.newVehicleBrandForm.value));
  }

  submit() {

    if(!this.isLoading){
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.createBrand()
      }
    }

  }
  createBrand() {

    console.log("createMachine")
    console.log(this.newVehicleBrandForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    this._httpService.createBrand(this.newVehicleBrandForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['id'] != null) {
            //data['tocken']
            localStorage.setItem('id', data['id']);
            this.toastr.success("New Machine Created Successfully");
            this._router.navigate(['/dashboard/vehicles/vehicle-brands'])
            
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

    if (this.newVehicleBrandForm.get('name').invalid) {
      this.errorMessage = "Please provide a valid Name";
      return false;
    }

    if (this.newVehicleBrandForm.get('vehicle_type').invalid) {
      this.errorMessage = "Please provide a valid power";
      return false;
    }
   
    
    return true
  }

}

