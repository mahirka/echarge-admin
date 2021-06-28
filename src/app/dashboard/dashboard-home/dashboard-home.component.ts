import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
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
  lineChartType = 'line';
  lineChartPlugins = [];
  lineChartLegend = true;
  lineChartOptions = {
    responsive: true,
  };
  lineChartLabels: Label[] = ['January'];


  bookingChartData: ChartDataSets[] = [
    {
      data: [133, 425, 155, 682, 77, 421], label: 'Bookings', fill: false,
      borderColor: '#30b1ff',
    },
  ];

  usersChartData: ChartDataSets[] = [
    {
      data: [133, 425, 155, 682, 77, 421], label: 'Users', fill: false,
      borderColor: '#14416a',
    },
  ];

  vendorsChartData: ChartDataSets[] = [
    {
      data: [133, 425, 155, 682, 77, 421], label: 'Vendors', fill: false,
      borderColor: '#14416a',
    },
  ];

  stationsChartData: ChartDataSets[] = [
    {
      data: [133, 425, 155, 682, 77, 421], label: 'Stations', fill: false,
      borderColor: '#14416a',
    },
  ];

  machinesChartData: ChartDataSets[] = [
    {
      data: [133, 425, 155, 682, 77, 421], label: 'Machines', fill: false,
      borderColor: '#14416a',
    },
  ];





  visibleGraph = 'none';
  isBookingGraphVisible = false;
  isUsersGraphVisible = false;
  isVendorsGraphVisible = false;
  isStationGraphVisible = false;
  isMachineGraphVisible = false;
  isLoading = false;
  dashboardDetails = []
  bookingCountsToShow: any[] = []
  booking_total: string = ""
  users_total: string = ""
  vendors_total: string = ""
  stations_total: string = ""
  machines_total: string = ""
  co2_total: string = ""
  tree_total: string = ""
  time_total: string = ""
  data_total: string = ""

  booking_dates = []
  users_dates = []
  vendors_dates = []
  charging_stations_dates = []
  charging_machines_dates = []

  booking_start_date = new Date()
  endDate = new Date()
  startDate = new Date()
  constructor(private _router: Router, private _httpService: HttpService) { }
  ngOnInit(): void {
    this.getdashboardDetails()
  }
  getdashboardDetails() {
    this._httpService.getdashboardDetails()
      .subscribe(
        data => {
          console.log("data")
          this.isLoading = false;
          console.log(data)
          this.dashboardDetails = data['data']

          let startingDates = []
          startingDates.push(new Date(data['data']['orders']['created_dates'][0]))
          startingDates.push(new Date(data['data']['users']['created_dates'][0]))
          startingDates.push(new Date(data['data']['vendors']['created_dates'][0]))
          startingDates.push(new Date(data['data']['charging_stations']['created_dates'][0]))
          startingDates.push(new Date(data['data']['charging_machines']['created_dates'][0]))

          startingDates = startingDates.sort((a, b) => {
            return new Date(a).getTime() - new Date(b).getTime();
          });

          this.startDate = startingDates[0];
          this.booking_dates = data['data']['orders']['created_dates']
          this.users_dates = data['data']['users']['created_dates']
          this.vendors_dates = data['data']['vendors']['created_dates']
          this.charging_stations_dates = data['data']['charging_stations']['created_dates']
          this.charging_machines_dates = data['data']['charging_machines']['created_dates']

          this.booking_total = data['data']['orders']['total']
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

          this.setUpChart()
        },
        error => {
          this.isLoading = false;
          this._router.navigate(['']);
        },
      );
  }
  getDaysArray(start, end) {
    for (var arr = [], dt = start; dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
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


  setUpChart() {


    let bookingsArray = []
    let usersArray = []
    let vendorsArray = []
    let charginStationsArray = []
    let charginMachinesArray = []

    let daysBetween = this.getDaysArray(this.startDate, this.endDate)
    this.lineChartLabels = daysBetween.map(day => this.getDayAndMonth(day))


    for (let index = 0; index < daysBetween.length; index++) {
      let bookingObject = {
        "timeStamp": daysBetween[index],
        "bookings": this.booking_dates.filter(booking_date => this.formatDate(booking_date) == this.formatDate(daysBetween[index]))
      }
      let usersObject = {
        "timeStamp": daysBetween[index],
        "bookings": this.users_dates.filter(booking_date => this.formatDate(booking_date) == this.formatDate(daysBetween[index]))
      }
      let vendorsObject = {
        "timeStamp": daysBetween[index],
        "bookings": this.vendors_dates.filter(booking_date => this.formatDate(booking_date) == this.formatDate(daysBetween[index]))
      }
      let chargingStationObject = {
        "timeStamp": daysBetween[index],
        "bookings": this.charging_stations_dates.filter(booking_date => this.formatDate(booking_date) == this.formatDate(daysBetween[index]))
      }
      let chargingMachineObject = {
        "timeStamp": daysBetween[index],
        "bookings": this.charging_machines_dates.filter(booking_date => this.formatDate(booking_date) == this.formatDate(daysBetween[index]))
      }


      bookingsArray.push(bookingObject)
      usersArray.push(usersObject)
      vendorsArray.push(vendorsObject)
      charginStationsArray.push(chargingStationObject)
      charginMachinesArray.push(chargingMachineObject)
    }


    this.bookingChartData = [
      {
        data: bookingsArray.map(reach => reach.bookings.length),
        label: 'Bookings', fill: false,
        borderColor: '#DD5600',
      },
    ];

    this.usersChartData = [
      {
        data: usersArray.map(reach => reach.bookings.length),
        label: 'Users', fill: false,
        borderColor: 'darkblue',
      },
    ];


    this.vendorsChartData = [
      {
        data: vendorsArray.map(reach => reach.bookings.length),
        label: 'Vendors', fill: false,
        borderColor: 'deepskyblue',
      },
    ];


    this.stationsChartData = [
      {
        data: charginStationsArray.map(reach => reach.bookings.length),
        label: 'Stations', fill: false,
        borderColor: 'blueviolet',
      },
    ];

    this.machinesChartData = [
      {
        data: charginMachinesArray.map(reach => reach.bookings.length),
        label: 'Machines', fill: false,
        borderColor: 'lightcoral',
      },
    ];



  }

}
