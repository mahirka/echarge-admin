import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicle-brands',
  templateUrl: './vehicle-brands.component.html',
  styleUrls: ['./vehicle-brands.component.css']
})
export class VehicleBrandsComponent implements OnInit {
  makeDetailsToShow:any[]=[ ]
  makes = []
  isLoading = false;

  constructor(private toastr: ToastrService,private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getVehicleMakeDetails()
   this.isLoading = true;
 
  }
  getVehicleMakeDetails(){
    this._httpService.getVehicleMakeDetails()
    
    .subscribe(
      data => {
        console.log("makesDetails")
        this.isLoading = false;
          console.log(data)
      this.makes =  data["Vehicle Makes"]
      this.makeDetailsToShow = this.makes
      console.log(this.makeDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }

  deleteMake(makeId) {

    if (confirm("Are you sure to delete ")) {

    this._httpService.deleteMake(makeId)
      .subscribe(

        data => {
          if (data['status'] == 'OK') {
            this.toastr.success("Brand Deleted Successfully", "Success");

            this.getVehicleMakeDetails()
          }


        },

        error => {
          this.toastr.error("Could you please try again?", error.error,);

        },

      );

    }
  }

  btnClick() {
    this._router.navigateByUrl('/dashboard/vehicles/brand-new');
};

}
