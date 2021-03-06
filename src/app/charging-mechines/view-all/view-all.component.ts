import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  publishedChargingMechineToShow:any[]=[ ]
  publishedChargingMechines:any[]=[ ]
  unPublishedChargingMechineToShow:any[]=[]
  unPublishedChargingMechines:any[]=[ ]
  machines = []
  isLoading = false;
  datingArray=[]
  startDate=new Date
  endDate=new Date

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total Machines' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#DD5600',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private _router: Router,private _httpService: HttpService,private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.getchargingMechine()
    this.isLoading = true;
  }
  getchargingMechine(){
    this._httpService.getchargingMechine()
    .subscribe(
      data => {
        console.log("chargingMachines")
        this.isLoading = false;
          console.log(data)
      this.machines =  data["Charging Machines"]
      this.publishedChargingMechineToShow =  this.machines.filter(machines=>    
        machines.published == true
      )
      this.publishedChargingMechines =  this.publishedChargingMechineToShow
      this.datingArray = this.machines.map( (createdArray)=> createdArray.property );

      this.unPublishedChargingMechineToShow =  this.machines.filter(machines=>    
        machines.published == false
      )
      this.unPublishedChargingMechines =  this.unPublishedChargingMechineToShow
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }


  publishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.publishedChargingMechines.length; index++) {
      let name=this.publishedChargingMechines[index]["name"];

      if(name){
        if(this.publishedChargingMechines[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.publishedChargingMechines[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.publishedChargingMechineToShow = tempArray;
  }

  unPublishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.unPublishedChargingMechines.length; index++) {
      let name=this.publishedChargingMechines[index]["name"];

      if(name){
        if(this.unPublishedChargingMechines[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.unPublishedChargingMechines[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.unPublishedChargingMechineToShow = tempArray;
  }
  deleteMachine(machineId) {

    if (confirm("Are you sure to delete ")) {

    this._httpService.deleteMachine(machineId)
      .subscribe(

        data => {
          if (data['status'] == 'OK') {
            this.toastr.success("Machine Deleted Successfully", "Success");

            this.getchargingMechine()
          }


        },

        error => {
          this.toastr.error("Could you please try again?", error.error,);

        },

      );

    }
  }
  changePublishedStatus(machineId,published) {
    if (confirm("Are you sure to delete ")) {

    this._httpService.updateMachine(machineId,{ published: published?"publish":"unpublish" })
      .subscribe(

        data => {

          if (data['status'] == 'OK') {
            this.toastr.success("station Updated Successfully", "Success");
            this.getchargingMechine()
          }

        },

        error => {
          console.log("error")
          console.log(error)
          this.toastr.error("Could you please try again?", error.error,);
        },

      );
  }
  }
  btnClick() {
    this._router.navigateByUrl('/dashboard/charging-machines/new');
};


}
