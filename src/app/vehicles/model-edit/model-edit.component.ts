import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit {

  newVehicleModelForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  modelId = ""
  constructor(private toastr: ToastrService, private store: Store<State>, private _activatedRoute: ActivatedRoute,private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.modelId = this._activatedRoute.snapshot.paramMap.get('makeId');
    this.newVehicleModelForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      vehicle_type: new FormControl(null, Validators.required),
      vehicle_make: new FormControl(null, Validators.required),
      

    });

    this._httpService.readByModelId(this.modelId)
    .subscribe(
      data => {
        console.log('readById result is ')
        console.log(data)

        this.newVehicleModelForm.get('name').setValue(data['Vehicle Models']['name']);
          this.newVehicleModelForm.get('vehicle_type').setValue(data['Vehicle Models']['vehicle_type']);
          this.newVehicleModelForm.get('vehicle_make').setValue(data['Vehicle Models']['vehicle_make']);
          
        
      },
      error => {
        this.toastr.error("No Admin Present with given Id ", "Admin Not Found");
      },
    );
  }
  save() {
    console.log(this.newVehicleModelForm);
    console.log('saved: ' + JSON.stringify(this.newVehicleModelForm.value));
  }

  submit() {

    if (!this.isLoading) {
      console.log("not is loading")
      if (this.checkIfFormValid()) {
        console.log("form valid")
        this.updateModel()
      }
    }

  }
  updateModel() {

    console.log("updatePlan")
    console.log(this.newVehicleModelForm.value)
    this.errorMessage = null;
    this.isLoading = true;
    
    this._httpService.updateModel(this.modelId,this.newVehicleModelForm.value)

      .subscribe(
        data => {
          console.log("data reached")

          this.isLoading = false;
          if (data['status'] == ['OK']) {
            //data['tocken']
           
            this.toastr.success("Model Updated Successfully");
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
