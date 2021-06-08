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
  machinesDetailsToShow:any[]=[]
  stationId = ""
  name: string = ""
  plug_type: string = ""
  city: string = ""

 machine_name: string = ""
  machine_plug_type: string = ""
  charging_power: string = ""
  electricity_supply_type: string = ""

  userName = "User"

  constructor(private toastr: ToastrService, private _activatedRoute: ActivatedRoute, private store: Store<State>, private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    this.stationId = this._activatedRoute.snapshot.paramMap.get('stationId');
    this.readUserById()
  }
  readUserById() {
    this._httpService.readById(this.stationId)
      .subscribe(
        data => {
          console.log('readById result is ')
          console.log(data)
          this.published = data['Charging Station']['published'];
          this.userName = data['Charging Station']['name'];
          this.name = data['Charging Station']['name']
          this.plug_type = data['Charging Station']['plug_type']
          this.city = data['Charging Station']['city']
          
          this.machinesDetailsToShow=data['charging_machines']
          this.machine_name = data['charging_machines'][0]['name']
          this.machine_plug_type = data['charging_machines'][0]['plug_type']
          this.electricity_supply_type = data['charging_machines'][0]['electricity_supply_type']
          this.charging_power = data['charging_machines'][0]['minimum_charging_power']


        },
        error => {
          this.toastr.error("No Stations Present with given Id ", "Stations Not Found");


        },
      );
  }

}
