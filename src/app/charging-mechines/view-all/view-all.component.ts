import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  profiles = []
  isLoading = false;

  constructor(private _router: Router,private _httpService: HttpService) { }

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
      this.profiles =  data["Charging Machines"]
      this.publishedChargingMechineToShow =  this.profiles.filter(profile=>    
        profile.published == true
      )
      this.publishedChargingMechines =  this.publishedChargingMechineToShow

      this.unPublishedChargingMechineToShow =  this.profiles.filter(profile=>    
        profile.published == false
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


}
