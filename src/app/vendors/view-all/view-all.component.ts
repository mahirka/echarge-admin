import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  publishedVendorsProfilesToShow:any[]=[]
  publishedVendorsProfiles:any[]=[]
  unPublishedVendorsProfilesToShow:any[]=[]
  unPublishedVendorsProfiles:any[]=[]
  profiles = []
  isLoading = false;

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getvendorsProfile()
   this.isLoading = true;
  }
  getvendorsProfile(){
    this._httpService.getvendorsProfile()
    .subscribe(
      data => {
        console.log("VendorsProfile")
        this.isLoading = false;
          console.log(data)
      this.profiles =  data["Users"].filter(profile=>    
        profile.is_vendor == true 
      )
      this.publishedVendorsProfilesToShow =  this.profiles.filter(profile=>    
        profile.published == true 
      )
      this.publishedVendorsProfiles =  this.publishedVendorsProfilesToShow

      this.unPublishedVendorsProfilesToShow =  this.profiles.filter(profile=>    
        profile.published == false 
      )
      this.unPublishedVendorsProfiles =  this.unPublishedVendorsProfilesToShow
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }


  publishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.publishedVendorsProfiles.length; index++) {
      let name=this.publishedVendorsProfiles[index]["name"];
      if(name){
        if(this.publishedVendorsProfiles[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.publishedVendorsProfiles[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.publishedVendorsProfilesToShow = tempArray;
  }

  unPublishedUserSuggestionChanged(e){
    let tempArray = []
    for (let index = 0; index < this.unPublishedVendorsProfiles.length; index++) {
      let name=this.unPublishedVendorsProfiles[index]["name"];

      if(name){
        if(this.unPublishedVendorsProfiles[index]["name"].toLowerCase().includes(e.target.value.toLowerCase())){
          tempArray.push(this.unPublishedVendorsProfiles[index])
        }
      }
      //let searchString = this.publishedUsersProfiles[index]["firstName"].toLowerCase() + " " + this.publishedUsersProfiles[index]["secondName"].toLowerCase() + " "+ this.publishedUsersProfiles[index]["nearestTown"].toLowerCase()
      // if(searchString.includes(e.target.value.toLowerCase())){
      //   tempArray.push(this.publishedUsersProfiles[index])
      // }
    }
    this.unPublishedVendorsProfilesToShow = tempArray;
  }


}