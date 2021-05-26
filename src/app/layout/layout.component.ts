
import { getLoggedInAdminDetails, State, getAppState } from '../state/app.reducer';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { Store } from '@ngrx/store';
import * as AppActions from '../state/app.actions'
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/http.service';
import * as uikit from 'uikit'



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {


  public href: string = "";

  isDashboardInLargeScreen = false;
  isLocationBoxHeaderVisible = false;
  isChatBoxHeaderVisible = false;
  isNotificationtBoxHeaderVisible = false;
  isHeaderSearchVisible = false;
  profilePicMediaId: any;
  constructor(private location: Location, private _httpService: HttpService, private _router: Router, private store: Store<State>, private toastr: ToastrService) { }

  loggedInUserId: string = ""
  loggedInUserName: string = ""
  profilePic: string = ""
  loggedInUserEmail: string = ""
  loggedInUserMobile: string = ""

  ngOnInit(): void {
    let url = this._router.url

    if (url.split('/')[1] == "dashboard") {
      this.isDashboardInLargeScreen = true
    } else {
      this.isDashboardInLargeScreen = false
    }

    this._router.events.subscribe(val => {
      url = this.location.path();

      if (url.split('/')[1] == "dashboard") {
        this.isDashboardInLargeScreen = true
      } else {
        this.isDashboardInLargeScreen = false
      }
    });


    this.store.select(getAppState).subscribe(
      appState => {
        if (appState) {



          if (appState.loggedInUserDetails.userId == 'userId') {
            this.getLoggedInAdminDetails()
          } else {


            this.loggedInUserId = appState.loggedInUserDetails.userId
            this.loggedInUserName = appState.loggedInUserDetails.name
            this.profilePic = appState.loggedInUserDetails.profilePic
            this.loggedInUserEmail = appState.loggedInUserDetails.email
            this.loggedInUserMobile = appState.loggedInUserDetails.mobile








          }
        }
      }
    )
  }

  locationButton() {
    this.isLocationBoxHeaderVisible = !this.isLocationBoxHeaderVisible
  }

  chatButton() {
    this.isChatBoxHeaderVisible = !this.isChatBoxHeaderVisible
  }

  notificationButton() {
    this.isNotificationtBoxHeaderVisible = !this.isNotificationtBoxHeaderVisible
  }

  getLoggedInAdminDetails() {
    this._httpService.getLoggedInAdminDetails()
      .subscribe(
        data => {

          if (data['adminDetails']) {

            this.loggedInUserId = data['adminDetails']['id']
            this.loggedInUserName = data['adminDetails']['name']
            this.profilePic = data['adminDetails']['profilePic']
            this.loggedInUserEmail = data['adminDetails']['email']
            this.loggedInUserMobile = data['adminDetails']['mobile']
            this.profilePicMediaId = data['adminDetails']['profilePicMediaId']

            this.store.dispatch(AppActions.updateLoggedInUserDetails({
              loggedInUserDetails: {
                userId: this.loggedInUserId, name: this.loggedInUserName, profilePic: this.profilePic, email: this.loggedInUserEmail, mobile: this.loggedInUserMobile, mediaId: this.profilePicMediaId
              }
            }))
            
          }


        },
        error => {
          //this.logout()


          // localStorage.removeItem('tocken');
         // this._router.navigate(['/authentication/login']); 

          this.toastr.info("Please Login", error.error,);

        },
      );
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {

    if (window.pageYOffset > 350) {
      this.isHeaderSearchVisible = true;
    } else {
      this.isHeaderSearchVisible = false;
    }
  }
  logout() {

    localStorage.removeItem('tocken');
    this._router.navigate(['/authentication/login'])
  }

  navigate(url) {
    console.log("navigate")
    console.log(url)
    uikit.offcanvas("#offcanvas-usage").hide();

    this._router.navigate([url])

  }


  updateSitemap() {
    this._httpService.updateSitemap()
    .subscribe(
      data => {



        if (data['response'] == 'success') {

          this.toastr.info("Please Login", "Sitemap updated successfully");

        }


      },
      error => {
        //this.logout()


        this.toastr.info("Please Login", "Somethin went wrong, Please try again");

      },
    );
  }
}
