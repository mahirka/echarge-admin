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

  OrderDetailsToShow:any[]=[ ]
  orders = []
  isLoading = false;

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total Bookings' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'darkgoldenrod',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getordersDetails()
   this.isLoading = true;
 
  }
  getordersDetails(){
    this._httpService.getordersDetails()
    
    .subscribe(
      data => {
        console.log("ordersDetails")
        this.isLoading = false;
          console.log(data)
      this.orders =  data["Orders"]
      this.OrderDetailsToShow = this.orders
      console.log(this.OrderDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
 

 




}
