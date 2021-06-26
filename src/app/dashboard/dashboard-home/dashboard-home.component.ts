import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'ng2-charts';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  heading = 'Analytics Dashboard';
  subheading = 'This is an example dashboard created using build-in elements and components.';
  icon = 'pe-7s-plane icon-gradient bg-tempting-azure';

  slideConfig6 = {
    className: 'center',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    dots: true,
  };

  public bookingDatasets = [
    {
      
      
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80], label: 'My First dataset', fill: false,
      borderColor: '#f7b924',
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets2 = [
    {
      label: 'My First dataset',
      data: [46, 55, 59, 80, 81, 38, 65, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public datasets3 = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false,
      },

    }
  ];
  public bookingLineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(247, 185, 36, 0.2)',
      borderColor: '#f7b924',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f7b924',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f7b924',
    },
  ];

  public lineChartColors2: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(48, 177, 255, 0.2)',
      borderColor: '#30b1ff',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#30b1ff',
      pointBackgroundColor: '#ffffff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#30b1ff',
    },
  ];

  public lineChartColors3: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(86, 196, 121, 0.2)',
      borderColor: '#56c479',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#56c479',
      pointBackgroundColor: '#fff',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#56c479',
    },
  ];

  public bookingLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public bookingOptions = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  public usersDatasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public usersLineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'darkseagreen',
      borderColor: 'deepskyblue',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'deepskyblue',
      pointBackgroundColor: 'white',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'deepskyblue',
    },
  ];

  public usersLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public usersOptions = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  public vendorsDatasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public vendorsLineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'lightblue',
      borderColor: 'yellow',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'yellow',
      pointBackgroundColor: 'white',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'yellow',
    },
  ];

  public vendorsLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public vendorsOptions = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  public stationDatasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public stationLineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'lightcoral',
      borderColor: 'darkseagreen',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'darkseagreen',
      pointBackgroundColor: 'white',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'darkseagreen',
    },
  ];

  public stationLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public stationOptions = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };

  public machineDatasets = [
    {
      label: 'My First dataset',
      data: [65, 59, 80, 81, 46, 55, 38, 59, 80],
      datalabels: {
        display: false,
      },

    }
  ];

  public machineLineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'burlywood',
      borderColor: 'darkcyan',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 4,
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'darkcyan',
      pointBackgroundColor: 'white',
      pointHoverBorderWidth: 4,
      pointRadius: 6,
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHitRadius: 10,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'darkcyan',
    },
  ];

  public machineLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

  public machineOptions = {
    layout: {
      padding: {
        left: 0,
        right: 8,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  };



  visibleGraph='none';
  isBookingGraphVisible=false;
  isUsersGraphVisible=false;
  isVendorsGraphVisible=false;
  isStationGraphVisible=false;
  isMachineGraphVisible=false;
  isLoading = false;
  dashboardDetails = []
  bookingCountsToShow:any[]=[]
  booking_total: string = ""
  booking_date:string=""
  users_total: string = ""
  vendors_total: string = ""
  stations_total: string = ""
  machines_total: string = ""
  co2_total: string = ""
  tree_total: string = ""
  time_total: string = ""
  data_total: string = ""
  startDate = ""
  endDate = ""
  viewsToShow = []
  reaches = []
  reachesToShow = []
  responses = []
  responsesToShow = []

  constructor(private _router: Router,private _httpService: HttpService) { }
  ngOnInit(): void {
    this.getdashboardDetails()
  }
  getdashboardDetails(){
    this._httpService.getdashboardDetails()
    .subscribe(
      data => {
        console.log("data")
        this.isLoading = false;
          console.log(data)
         this.dashboardDetails=data['data']
          this.booking_total = data['data']['orders']['total']
          this.booking_date= data['data']['orders']['created_dates'][0]
          this.users_total = data['data']['users']['total']
          this.vendors_total = data['data']['vendors']['total']
          this.stations_total = data['data']['charging_stations']['total']
          this.machines_total = data['data']['charging_machines']['total']
          this.co2_total = parseFloat(data['data']['co2_saved']['total']['auto'] + data['data']['co2_saved']['total']['bike'] + data['data']['co2_saved']['total']['car']).toFixed(2)
          this.tree_total = data['data']['number_of_tree_planed']
          this.time_total = data['data']['total_charging_time']['total']
          this.data_total = data['data']['total_charging_data']['total']
          

          console.log("total")
          console.log(this.booking_total)
      
      },
      error => {
        this.isLoading = false;
        this._router.navigate(['']);
      },
    );
  }
  getDaysArray(start, end) {
    for (var arr = [], dt = ['data']['orders']['created_dates'][0](start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt));
    }
    return arr;
  };

  getDayAndMonth(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate();
                                                                  
      
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [day, month].join('-');
  }

  getWeekStartDate(d) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  getMonths(startDate, endDate) {
    
    var start = this.formatDate(startDate).split('-');
    var end = this.formatDate(endDate).split('-');
    var startYear = parseInt(start[0]);
    var endYear = parseInt(end[0]);
    var dates = [];

    for (var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
      for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
        var month = j + 1;
        var displayMonth = month < 10 ? '0' + month : month;
        dates.push(new Date([i, displayMonth, '01'].join('-')));
      }
    }

    return dates;

  }

  checkIfSameMonth(date1, date2) {

    var d1 = new Date(date1)
    var d2 = new Date(date2)
    var month1 = d1.getMonth()
    var month2 = d2.getMonth()
    var year1 = d1.getFullYear()
    var year2 = d2.getFullYear()

    return [year1, month1].join('-') == [year2, month2].join('-')


  }

  getYearAndMonth(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;


    return [year, month].join('-');
  }


  setUpChart(duration) {

    let reachCreatedDate = this.reachesToShow.map(s => s.createdOn);
    
    let reachesArray = []
    
    

    if (duration == "Daily") {
      let daysBetween = this.getDaysArray(this.startDate, this.endDate)


      for (let index = 0; index < daysBetween.length; index++) {
        let obje = {
          "timeStamp": daysBetween[index],
          "reaches": reachCreatedDate.filter(reachCreatedDate => this.formatDate(reachCreatedDate) == this.formatDate(daysBetween[index]))
        }
        reachesArray.push(obje)
      }


      this.bookingLabels = daysBetween.map(day => this.getDayAndMonth(day))

    }



    if (duration == "Weekly") {

      let daysBetween = this.getDaysArray(this.startDate, this.endDate)

      let weeksBetween = []

      for (let index = 0; index < daysBetween.length; index++) {

        if (weeksBetween.indexOf(this.getWeekStartDate(daysBetween[index])) == -1) {
          weeksBetween.push(this.getWeekStartDate(daysBetween[index]));

        }

      }


      weeksBetween = weeksBetween
        .map(function (date) { return date.getTime() })
        .filter(function (date, i, array) {
          return array.indexOf(date) === i;
        })
        .map(function (time) { return new Date(time); });
      console.log("weekly")
      console.log(weeksBetween)

      for (let index = 0; index < weeksBetween.length; index++) {
        let obje = {
          "timeStamp": weeksBetween[index],
          "reaches": reachCreatedDate.filter(reachCreatedDate => this.formatDate(this.getWeekStartDate(reachCreatedDate)) == this.formatDate(weeksBetween[index]))
        }
        reachesArray.push(obje)
      }


      this.bookingLabels = weeksBetween.map(day => this.getDayAndMonth(day))

    }

    if (duration == "Monthly") {
      let monthsBetween = this.getMonths(this.startDate, this.endDate)


      for (let index = 0; index < monthsBetween.length; index++) {
        let obje = {
          "timeStamp": monthsBetween[index],
          "reaches": reachCreatedDate.filter(reachCreatedDate => this.checkIfSameMonth(reachCreatedDate, monthsBetween[index]))
        }
        reachesArray.push(obje)
      }

      this.bookingLabels = monthsBetween.map(day => this.getYearAndMonth(day))


    }


    this.bookingDatasets = [
      {
        data: reachesArray.map(reach => reach.reaches.length),label: 'My First dataset', fill: false,
        borderColor: '#f7b924',
        backgroundColor: 'rgba(247, 185, 36, 0.2)',
        datalabels: {
          display: false,
        },
      },
      
    ];



  }

}
