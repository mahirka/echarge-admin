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
  vehiclesToShow:any[]=[]
  favouritesToShow:any[]=[]
  ordersToShow:any[]=[]

  published = false
  userId = ""
  name: string = ""
  email: string = ""
  mobile: string = ""

  vehicle_name: string = ""
  charging_power:string=""
  plug_type: string = ""
  battery_capacity: string = ""

  favourite_name: string = ""
  favourite_place: string = ""
  favourite_date: string = ""

  order_name: string = ""
  booking_time: string = ""
  order_date: string = ""

  wallet: string = ""
  userName = "User"

  constructor(private toastr: ToastrService, private _activatedRoute: ActivatedRoute, private store: Store<State>, private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
    
    this.userId = this._activatedRoute.snapshot.paramMap.get('userId');
    this.readUserById()
  }


  readUserById() {
    this._httpService.readById(this.userId)
      .subscribe(
        data => {
          console.log('readById result is ')
          console.log(data)
          this.published = data['User'][0]['published'];
          this.userName = data['User'][0]['name'];
          this.name = data['User'][0]['name']
          this.email = data['User'][0]['email'] 
          this.mobile = data['User'][0]['mobile']
          this.wallet = data['User'][0]['wallet']

          this.vehiclesToShow=data["vehicles"]
          this.vehicle_name = data['vehicles'][0]['name']
          this.charging_power = data['vehicles'][0]['charging_power']
          this.plug_type = data['vehicles'][0]['plug_type']
          this.battery_capacity = data['vehicles'][0]['battery_capacity']

          this.favouritesToShow=data["favorites"]
          this.favourite_name = data['favorites'][0]['name']
          this.favourite_place = data['favorites'][0]['city']
          this.favourite_date = data['favorites'][0]['create_date']
          
          this.ordersToShow=data["charging_history"]
          this.order_name = data['charging_history'][0]['name']
          this.booking_time = data['charging_history'][0]['booking_time']
          this.order_date = data['charging_history'][0]['create_date']
          


        },
        error => {
          this.toastr.error("No Admin Present with given Id ", "Admin Not Found");


        },
      );
  }
}
