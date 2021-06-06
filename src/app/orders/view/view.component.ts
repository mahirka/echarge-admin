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
  orderId = ""
  name: string = ""
  user: string = ""
  street: string = ""
  updated_date: string = ""
  userName = "User"

  constructor(private toastr: ToastrService, private _activatedRoute: ActivatedRoute, private store: Store<State>, private _httpService: HttpService, private fb: FormBuilder, private _router: Router,) { }

  ngOnInit(): void {
 
    this.orderId = this._activatedRoute.snapshot.paramMap.get('orderId');
    this.readUserById()
  }


  readUserById() {
    this._httpService.readById(this.orderId)
      .subscribe(
        data => {
          console.log('readById result is ')
          console.log(data)
          this.userName = data['Order']['name'];
          this.name = data['Order']['name']
          this.user = data['Order']['user']
          this.street = data['Order']['street']
          this.updated_date = data['Order']['updated_date']



        },
        error => {
          this.toastr.error("No Order Present with given Id ", "Order Not Found");


        },
      );
  }

}
