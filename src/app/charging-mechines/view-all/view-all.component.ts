import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  publishedChargingMechineToShow:any[]=[{
    name:"EV Ather",
    slot:"C Type",
    kw:"450x",
  },
  {
    name:"EV Ather",
    slot:"C Type",
    kw:" 450x",
  },
  ]
  publishedChargingMechines:any[]=[{
    name:"EV Ather",
    slot:"C Type",
    kw:"450x",
  },
  {
    name:"EV Ather",
    slot:"C Type",
    kw:" 450x",
  },
  ]
  unPublishedChargingMechineToShow:any[]=[{
    name:"EV Ather",
    slot:"C Type",
    kw:"450x",
  },
  {
    name:"EV Ather",
    slot:"C Type",
    kw:" 450x",
  },
  ]
  unPublishedChargingMechines:any[]=[{
    name:"EV Ather",
    slot:"C Type",
    kw:"450x",
  },
  {
    name:"EV Ather",
    slot:"C Type",
    kw:" 450x",
  },
  ]
  profiles = []

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
 
  }
  getchargingMechine(){
    this._httpService.getchargingMechine()
    .subscribe(
      data => {
        console.log("chargingStation")
          console.log(data)
      this.profiles =  data["users"]
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
        this._router.navigate(['/dashboard']);
      },
    );
  }


  publishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.publishedChargingMechines.length; index++) {
      if(this.publishedChargingMechines[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
        tempArray.push(this.publishedChargingMechines[index])
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
      if(this.unPublishedChargingMechines[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
        tempArray.push(this.unPublishedChargingMechines[index])
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.unPublishedChargingMechineToShow = tempArray;
  }


}
