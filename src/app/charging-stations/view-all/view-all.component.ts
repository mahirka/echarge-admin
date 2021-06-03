import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getchargingStation()
  }
  getchargingStation(){
    this._httpService.getchargingStation()
    .subscribe(
      data => {
        console.log("chargingStation")
          console.log(data)
      this.stations =  data["Charging Station"]
      this.publishedChargingStationToShow =  this.stations
      this.publishedChargingStations =  this.publishedChargingStationToShow
      this.unPublishedChargingStationToShow =  this.stations
      this.unPublishedChargingStations =  this.unPublishedChargingStationToShow
      },
      error => {
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


}