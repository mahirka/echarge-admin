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
  userId = ""
  name: string = ""
  email: string = ""
  mobile: string = ""
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



        },
        error => {
          this.toastr.error("No Admin Present with given Id ", "Admin Not Found");


        },
      );
  }
}
