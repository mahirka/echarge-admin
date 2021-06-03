import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  publishedUsersProfilesToShow:any[]=[]
  publishedUsersProfiles:any[]=[]
  unPublishedUsersProfilesToShow:any[]=[]
  unPublishedUsersProfiles:any[]=[]
  profiles = []

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getusersProfile()
  }
  getusersProfile(){
    this._httpService.getusersProfile()
    .subscribe(
      data => {
        console.log("usersProfile")
          console.log(data)
      this.profiles =  data["Users"]
      this.publishedUsersProfilesToShow =  this.profiles.filter(profile=>    
        profile.published == true
      )
      this.publishedUsersProfiles =  this.publishedUsersProfilesToShow

      this.unPublishedUsersProfilesToShow =  this.profiles.filter(profile=>    
        profile.published == false
      )
      this.unPublishedUsersProfiles =  this.unPublishedUsersProfilesToShow
      },
      error => {
        this._router.navigate(['']);
      },
    );
  }


  publishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.publishedUsersProfiles.length; index++) {
      let name=this.publishedUsersProfiles[index]["name"];
      if(name){
        if(this.publishedUsersProfiles[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.publishedUsersProfiles[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.publishedUsersProfilesToShow = tempArray;
  }

  unPublishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.unPublishedUsersProfiles.length; index++) {
      let name=this.unPublishedUsersProfiles[index]["name"];

      if(name){
        if(this.unPublishedUsersProfiles[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.unPublishedUsersProfiles[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.unPublishedUsersProfilesToShow = tempArray;
  }


}
