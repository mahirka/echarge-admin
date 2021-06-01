import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  OrderDetailsToShow:any[]=[ ]
  orders = []

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getordersDetails()

 
  }
  getordersDetails(){
    this._httpService.getordersDetails()
    .subscribe(
      data => {
        console.log("ordersDetails")
          console.log(data)
      this.orders =  data["Orders"]
      this.OrderDetailsToShow = this.orders
      console.log(this.OrderDetailsToShow)
     
      },
      error => {
        this._router.navigate(['']);
      },
    );
  }


 




}
