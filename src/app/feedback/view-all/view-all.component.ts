import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  feedbackDetailsToShow:any[]=[ ]
  orders = []
  isLoading = false;

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getfeedbackDetails()
   this.isLoading = true;
 
  }
  getfeedbackDetails(){
    this._httpService.getfeedbackDetails()
    
    .subscribe(
      data => {
        console.log("feedbackDetails")
        this.isLoading = false;
          console.log(data)
      this.orders =  data["Feedbacks"]
      this.feedbackDetailsToShow = this.orders
      console.log(this.feedbackDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
 

 




}
