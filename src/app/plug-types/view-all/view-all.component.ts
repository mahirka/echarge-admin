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

  PlugTypeDetailsToShow:any[]=[ ]
  orders = []
  isLoading = false;

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total PLugs' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getplugTypeDetails()
   this.isLoading = true;
 
  }
  getplugTypeDetails(){
    this._httpService.getplugTypeDetails()
    
    .subscribe(
      data => {
        console.log("plugTypeDetails")
        this.isLoading = false;
          console.log(data)
      this.orders =  data["plug_types"]
      this.PlugTypeDetailsToShow = this.orders
      console.log(this.PlugTypeDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
 

 




}

