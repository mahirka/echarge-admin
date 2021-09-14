import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  isLoading = false;

  activityRemark = '';

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total Users' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'brown',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';




  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getusersProfile()
   this.isLoading = true;
  }
  getusersProfile(){
    this._httpService.getusersProfile()
    .subscribe(
      data => {
        console.log("usersProfile")
        this.isLoading = false;
          console.log(data)
      this.profiles =  data["Users"].filter(profile=>    
        profile.is_vendor == false 
      )
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
        this.isLoading = false;
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
