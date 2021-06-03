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
    this.readUserById()
    this.userId = this._activatedRoute.snapshot.paramMap.get('userId');
  }


  readUserById() {
    this._httpService.readById()
      .subscribe(
        data => {
          console.log('readById result is ')
          console.log(data)

          if (data['response'] == 'success') {

            this.published = data['userDetails']['published'];
            this.userName = data['userDetails']['name'];
            
            

            this.name = data['userDetails']['name']
            this.email = data['userDetails']['email']
            this.mobile = data['userDetails']['mobile']
            

          } else {
            this.toastr.error("No Admin Present with given Id ", "Admin Not Found");


          }



        },
        error => {
          this.toastr.error("No Admin Present with given Id ", "Admin Not Found");


        },
      );
  }
}
