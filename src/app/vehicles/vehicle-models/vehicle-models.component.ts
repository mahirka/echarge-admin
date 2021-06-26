import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicle-models',
  templateUrl: './vehicle-models.component.html',
  styleUrls: ['./vehicle-models.component.css']
})
export class VehicleModelsComponent implements OnInit {
  modelDetailsToShow:any[]=[ ]
  models = []
  isLoading = false;

  constructor(private toastr: ToastrService,private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getVehicleModelDetails()
   this.isLoading = true;
 
  }
  getVehicleModelDetails(){
    this._httpService.getVehicleModelDetails()
    
    .subscribe(
      data => {
        console.log("Model Details")
        this.isLoading = false;
          console.log(data)
      this.models =  data["Vehicle Models"]
      this.modelDetailsToShow = this.models
      console.log(this.modelDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }

  deleteModel(modelId) {

    if (confirm("Are you sure to delete ")) {

    this._httpService.deleteModel(modelId)
      .subscribe(

        data => {
          if (data['status'] == 'OK') {
            this.toastr.success("Model Deleted Successfully", "Success");

            this.getVehicleModelDetails()
          }


        },

        error => {
          this.toastr.error("Could you please try again?", error.error,);

        },

      );

    }
  }

  btnClick() {
    this._router.navigateByUrl('/dashboard/vehicles/model-new');
};

}
