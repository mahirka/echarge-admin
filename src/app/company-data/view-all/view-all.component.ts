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
  companyDetailsToShow:any[]=[ ]
  orders = []
  isLoading = false;

  chartDuration = 'Daily';
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Total Data' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'darksalmon',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private _router: Router,private _httpService: HttpService) { }

  ngOnInit(): void {
   this.getCompanyDetails()
   this.isLoading = true;
 
  }
  getCompanyDetails(){
    this._httpService.getCompanyDetails()
    
    .subscribe(
      data => {
        console.log("companyDetails")
        this.isLoading = false;
          console.log(data)
      this.orders =  data["Company"]
      this.companyDetailsToShow = this.orders
      console.log(this.companyDetailsToShow)
     
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
  btnClick() {
    this._router.navigateByUrl('/dashboard/company-data/edit');
};

 




}
