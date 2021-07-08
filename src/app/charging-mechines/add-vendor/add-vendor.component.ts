import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  addVendorForm: FormGroup;
  errorMessage = null;
  isLoading = false;
  
  constructor(private toastr: ToastrService, private store: Store<State>,  private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {

    this.addVendorForm = new FormGroup({
      machine_id: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      
  });

}
save() {
  console.log(this.addVendorForm);
  console.log('saved: ' + JSON.stringify(this.addVendorForm.value));
}

submit() {

  if(!this.isLoading){
    console.log("not is loading")
    if (this.checkIfFormValid()) {
      console.log("form valid")
      this.assignVendor()
    }
  }

}
assignVendor() {

  console.log("assignVendor")
  console.log(this.addVendorForm.value)
  this.errorMessage = null;
  this.isLoading = true;
  
  this._httpService.assignVendor(this.addVendorForm.value)

    .subscribe(
      data => {
        console.log("data reached")

        this.isLoading = false;
        if (data['status'] == ['OK']) {
          //data['tocken']
         
          this.toastr.success("Assign Vender Successfully");
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

  if (this.addVendorForm.get('machine_id').invalid) {
    this.errorMessage = "Please provide a valid Name";
    return false;
  }

  if (this.addVendorForm.get('mobile').invalid) {
    this.errorMessage = "Please provide a valid power";
    return false;
  }

 
 
  
  return true
}
}
