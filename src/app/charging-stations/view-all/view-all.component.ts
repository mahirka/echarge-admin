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

  publishedChargingStationToShow:any[]=[]
  publishedChargingStations:any[]=[ ]
  unPublishedChargingStationToShow:any[]=[]
  unPublishedChargingStations:any[]=[]
  stations = []

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total Stations' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'lightcoral',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
  isLoading = false;

  constructor(private _router: Router,private _httpService: HttpService,private toastr: ToastrService, ) { }

  ngOnInit(): void {
   this.getchargingStation()
  }
  getchargingStation(){
    this.isLoading = true;
    this._httpService.getchargingStation()
    .subscribe(
      data => {
        console.log("chargingStation")
        this.isLoading = false;
          console.log(data)
      this.stations =  data["Charging Station"]
      this.publishedChargingStationToShow =  this.stations.filter(station => station.published == true)
      this.publishedChargingStations =  this.publishedChargingStationToShow
      this.unPublishedChargingStationToShow =  this.stations.filter(station => station.published == false)
      this.unPublishedChargingStations =  this.unPublishedChargingStationToShow
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['/dashboard']);
      },
    );
  }


  publishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.publishedChargingStations.length; index++) {
      let name=this.publishedChargingStations[index]["name"];
      if(name){
        if(this.publishedChargingStations[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.publishedChargingStations[index])
        }
      }
      
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.publishedChargingStationToShow = tempArray;
  }

  unPublishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.unPublishedChargingStations.length; index++) {
      let name=this.unPublishedChargingStations[index]["name"];
      if(name){
        if(this.unPublishedChargingStations[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.unPublishedChargingStations[index])
        }
      }
      
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.unPublishedChargingStationToShow = tempArray;
  }

  deleteStation(stationId) {

    if (confirm("Are you sure to delete ")) {

    this._httpService.deleteStation(stationId)
      .subscribe(

        data => {
          if (data['status'] == 'OK') {
            this.toastr.success("Station Deleted Successfully", "Success");

            this.getchargingStation()
          }


        },

        error => {
          this.toastr.error("Could you please try again?", error.error,);

        },

      );

    }
  }
  changePublishedStatus(stationId,published) {
    if (confirm("Are you sure to delete ")) {

    this._httpService.updateStation(stationId,{ published: published?"publish":"unpublish" })
      .subscribe(

        data => {

          if (data['status'] == 'OK') {
            this.toastr.success("station Updated Successfully", "Success");
            this.getchargingStation()
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
    this._router.navigateByUrl('/dashboard/charging-stations/new');
};



}