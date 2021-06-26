import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {
  newVehicleBrandForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  makeId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.makeId = this._activatedRoute.snapshot.paramMap.get('makeId');
    this.newVehicleBrandForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
      

    });

    this._httpService.readById(this.makeId)
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.newVehicleBrandForm.get('name').setValue(data['Vehicle Makes']['name']);
          this.newVehicleBrandForm.get('vehicle_type').setValue(data['Vehicle Makes']['vehicle_type']);
          
        
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.newVehicleBrandForm);
    console.log('saved: ' + JSON.stringify(this.newVehicleBrandForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateMake()
      }
    }

  }
  updateMake() {

    console.log("updatePlan")
    console.log(this.newVehicleBrandForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateMake(this.makeId,this.newVehicleBrandForm.value)

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
