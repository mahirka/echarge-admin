import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { State } from 'src/app/state/app.reducer';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  published = false
  orderDetailsToShow:any[]=[]
  dataDetailsToShow:any[]=[]
  machineId = ""
  name: string = ""
  electricity_supply_type: string = ""
  minimum_charging_power: string = ""

  user: string = ""
  history_date: string = ""
  total: string = ""
  
  phase_voltage: string = ""
  data_date: string = ""
  frequency: string = ""

  userName = "User"

  constructor(private toastr: ToastrService, private _activatedRoute: ActivatedRoute, private store: Store<State>, private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.machineId = this._activatedRoute.snapshot.paramMap.get('machineId');
    this.readUserById()
    this.readHistoryById()
    this.chargingDataById()
  }
  readUserById() {
    this._httpService.readById(this.machineId)
      .subscribe(
        data => {
          console.log('readById result is ')
          console.log(data)
          this.published = data['Charging Machhine']['published'];
          this.userName = data['Charging Machhine']['name'];
          this.name = data['Charging Machhine']['name']
          this.electricity_supply_type = data['Charging Machhine']['electricity_supply_type']
          this.minimum_charging_power = data['Charging Machhine']['minimum_charging_power']
          



        },
        error => {
          this.toastr.error("No Mechines Present with given Id ", "Mechines Not Found");


        },
      );
  }
  readHistoryById() {
    this._httpService.historyById(this.machineId)
      .subscribe(
        data => {
          console.log('historyById result is ')
          console.log(data)
          this.orderDetailsToShow=data['charging_history']
          
          this.phase_voltage = data['charging_history']['phase_voltage']
          this.data_date = data['charging_history']['create_date']
          this.frequency = data['charging_history']['frequency']
        
        },
        error => {
          this.toastr.error("No Mechines Present with given Id ", "Mechines Not Found");


        },
      );
  }
  chargingDataById() {
    this._httpService.dataById(this.machineId)
      .subscribe(
        data => {
          console.log('dataById result is ')
          console.log(data)
          this.orderDetailsToShow=data['charging_data']
          this.published = data['charging_data']['published'];
          this.name = data['charging_data']['name']
          this.history_date = data['charging_data']['create_date']
          this.total = data['charging_data']['total']
        
        },
        error => {
          this.toastr.error("No Mechines Present with given Id ", "Mechines Not Found");


        },
      );
  }
}
