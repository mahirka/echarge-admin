(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OpKh:function(o,e,t){"use strict";t.r(e),t.d(e,"AuthenticationModule",(function(){return Y}));var i=t("SVse"),r=t("s7LF"),n=t("c8u5");class s{constructor(o="",e=""){this.mobile=o,this.password=e}}var a=t("8Y7J"),l=t("EApP"),c=t("AytR"),g=t("IheW");let d=(()=>{class o{constructor(o){this._http=o}register(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"register",requestBody:o},{headers:{authTocken:localStorage.getItem("tocken"),apiKey:c.a.apiKey},observe:"body"})}login(o){return this._http.post("https://api.evspace.in/api/admin/login",o,{headers:{"x-access-token":c.a.apiKey},observe:"body"})}sendOtpToResetPassword(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"sendOtpToResetPassword",requestBody:o},{headers:{apiKey:c.a.apiKey},observe:"body"})}verifyOtpToResetPassword(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"verifyOtpToResetPassword",requestBody:o},{headers:{apiKey:c.a.apiKey},observe:"body"})}resetPassword(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"resetPassword",requestBody:o},{headers:{apiKey:c.a.apiKey},observe:"body"})}uploadMedia(o){return this._http.post("https://api.listnsell.in/api/upload",o,{headers:{authTocken:localStorage.getItem("tocken"),apiKey:c.a.apiKey},observe:"body"})}sendOtpToRegister(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"sendOtpToRegister",requestBody:o},{headers:{apiKey:c.a.apiKey},observe:"body"})}verifyOtpToRegister(o){return this._http.post("https://api.listnsell.in/api/auth/admin",{requestType:"verifyOtpToRegister",requestBody:o},{headers:{apiKey:c.a.apiKey},observe:"body"})}}return o.\u0275fac=function(e){return new(e||o)(a.Rb(g.b))},o.\u0275prov=a.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=t("iInd");function b(o,e){1&o&&(a.Nb(0,"div",19),a.nc(1," Mob.no is required. "),a.Mb())}function m(o,e){1&o&&(a.Nb(0,"div",19),a.nc(1," Mob.no must be atleast 10 digits "),a.Mb())}function f(o,e){if(1&o&&(a.Nb(0,"div",17),a.mc(1,b,2,0,"div",18),a.mc(2,m,2,0,"div",18),a.Mb()),2&o){const o=a.Yb();a.xb(1),a.Zb("ngIf",o.mobile.errors.required),a.xb(1),a.Zb("ngIf",o.mobile.errors.pattern)}}function h(o,e){1&o&&(a.Nb(0,"div",17),a.Nb(1,"div",19),a.nc(2," Password must contain atleast 6 characters, including upper/lowercase and numbers. "),a.Mb(),a.Mb())}function u(o,e){if(1&o&&(a.Nb(0,"p",20),a.nc(1),a.Mb()),2&o){const o=a.Yb();a.xb(1),a.oc(o.errorMessage)}}function w(o,e){1&o&&a.Jb(0,"i",21)}const x=function(){return["/authentication/forgotpassword"]},_=function(){return["/authentication/register"]};let v=(()=>{class o{constructor(o,e,t){this.toastr=o,this._httpService=e,this._router=t,this.log=new s,this.errorMessage=null,this.isLoading=!1}ngOnInit(){this.loginForm=new r.e({mobile:new r.c(this.log.mobile,[r.n.required,r.n.pattern("([0-9]{10,10})+")]),password:new r.c(this.log.password,[r.n.required,r.n.minLength(5),n.a.patternValidator(/\d/,{hasNumber:!0}),n.a.patternValidator(/[A-Za-z]/,{hasCapitalCase:!0})])})}get mobile(){return this.loginForm.get("mobile")}get password(){return this.loginForm.get("password")}save(){console.log(this.loginForm),console.log("saved: "+JSON.stringify(this.loginForm.value))}submit(){this.isLoading||(console.log("not is loading"),this.checkIfFormValid()&&(console.log("form valid"),this.login()))}login(){console.log("login reached"),this.errorMessage=null,this.isLoading=!0,this._httpService.login(this.loginForm.value).subscribe(o=>{console.log("data reached"),this.isLoading=!1,null!=o.token&&(localStorage.setItem("token",o.token),this._router.navigate(["/dashboard"]))},o=>{console.log("error reached"),console.log(o.error),this.isLoading=!1,this.errorMessage=o.error})}checkIfFormValid(){return!this.loginForm.invalid||(this.errorMessage="somthing went wrong !",!1)}}return o.\u0275fac=function(e){return new(e||o)(a.Ib(l.b),a.Ib(d),a.Ib(p.b))},o.\u0275cmp=a.Cb({type:o,selectors:[["app-login"]],decls:27,vars:9,consts:[[3,"formGroup","ngSubmit"],["for","",1,"logsign__container--title"],["for","",1,"logsign__container--subtitle"],[1,"form-group","logsign__container--form-group"],["type","tel","placeholder","Mobile Number","formControlName","mobile","required","",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","password","placeholder","Password","id","exampleInputPassword1","formControlName","password","required","",1,"form-control"],[1,"form-group","form-check","logsign__container--form-group","my-4"],["type","hidden","id","exampleCheck1",1,"form-check-input"],["for","exampleCheck1",1,"form-check-label"],["routerLinkActive","router-link-active",1,"text-right",2,"float","right",3,"routerLink"],[1,"d-flex","flex-wrap","align-items-center","justify-content-between","pt-3"],["class","error-msg","for","",4,"ngIf"],[1,"btn","bg-main","w-100","mt-2",2,"background-color","#008081","color","white",3,"click"],["class","fa fa-spin fa-spinner",4,"ngIf"],["for","",1,"account_detail"],["routerLinkActive","router-link-active",1,"text-right",3,"routerLink"],[1,"alert","alert-danger"],["class","err-font",4,"ngIf"],[1,"err-font"],["for","",1,"error-msg"],[1,"fa","fa-spin","fa-spinner"]],template:function(o,e){1&o&&(a.Nb(0,"form",0),a.Ub("ngSubmit",(function(){return e.submit()})),a.Nb(1,"label",1),a.nc(2,"LOG IN"),a.Mb(),a.Nb(3,"label",2),a.nc(4,"Welcome back! Please login to your account."),a.Mb(),a.Nb(5,"div",3),a.Jb(6,"input",4),a.mc(7,f,3,2,"div",5),a.Mb(),a.Nb(8,"div",3),a.Jb(9,"input",6),a.mc(10,h,3,0,"div",5),a.Mb(),a.Nb(11,"div",7),a.Jb(12,"input",8),a.Jb(13,"label",9),a.Nb(14,"a",10),a.Nb(15,"b"),a.nc(16,"ForgotPassword?"),a.Mb(),a.Mb(),a.Mb(),a.Nb(17,"div",11),a.mc(18,u,2,1,"p",12),a.Nb(19,"button",13),a.Ub("click",(function(){return e.submit()})),a.nc(20,"Log In"),a.mc(21,w,1,0,"i",14),a.Mb(),a.Nb(22,"label",15),a.nc(23,"Don't have an account? "),a.Nb(24,"a",16),a.Nb(25,"b"),a.nc(26,"Sign Up"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&o&&(a.Zb("formGroup",e.loginForm),a.xb(7),a.Zb("ngIf",e.mobile.invalid&&(e.mobile.dirty||e.mobile.touched)),a.xb(3),a.Zb("ngIf",e.password.invalid&&(e.password.dirty||e.password.touched)),a.xb(4),a.Zb("routerLink",a.bc(7,x)),a.xb(4),a.Zb("ngIf",e.errorMessage),a.xb(3),a.Zb("ngIf",e.isLoading),a.xb(3),a.Zb("routerLink",a.bc(8,_)))},directives:[r.p,r.i,r.f,r.a,r.h,r.d,r.l,i.i,p.d,p.c],styles:[".logsign{width:100vw;height:100vh;overflow:hidden}.logsign__side-bg{height:100vh;width:100vw;padding:0}.logsign__side-bg img{height:100%}.logsign__logsign{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100vh;overflow-y:scroll;padding-left:0}.text-right{color:#008081}.logsign__logsign--privacy{text-align:center;font-size:14px;margin:3rem 0}.account_detail{text-align:center;justify-content:center;align-items:center;width:100%;margin:2rem 0}.logsign__container{width:80%;max-width:400px;min-width:300px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.logsign__container--img{display:block;width:80px;height:80px;margin:4rem auto 6rem}.logsign__container--title{font-size:28px;width:100%;text-align:center;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:5.8px;color:#1c4144}.logsign__container--subtitle{font-size:16px;width:100%;text-align:center;color:#222;opacity:.5}.logsign__container--form-group{margin:20px 0}.logsign__container--form-group label{font-size:14px}.logsign__container--form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.logsign__container--form-group .form-control:-ms-input-placeholder{color:#222}.logsign__container--form-group .form-control::-moz-placeholder{color:#222}.logsign__container--form-group .form-control::placeholder{color:#222}.logsign__container button{width:40%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.error-label,.error-msg,.error-para{font-size:14px;color:red;width:100%;text-align:center}.ng-valid.required,.ng-valid[required]{border-left:5px solid #42a948}.ng-invalid:not(form){border-left:5px solid #a94442}.alert{border:0;margin-bottom:0;background-color:#fff;padding:.5rem;color:red;font-size:smaller}.form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.spaan{color:#000;font-size:14px;margin-left:.8rem}@media (max-width:400px){.logsign__container button{width:100%;margin-bottom:15px}.logsign__container--title{font-size:22px}.logsign__container--subtitle{font-size:14px}.flex-parent{display:flex}}"],encapsulation:2}),o})();class y{constructor(o="",e="",t=""){this.mobile=o,this.otp=e,this.password=t}}function M(o,e){1&o&&(a.Nb(0,"div",14),a.nc(1," Mob.no is required. "),a.Mb())}function N(o,e){1&o&&(a.Nb(0,"div",14),a.nc(1," Mob.no must be atleast 10 digits "),a.Mb())}function k(o,e){if(1&o&&(a.Nb(0,"div",12),a.mc(1,M,2,0,"div",13),a.mc(2,N,2,0,"div",13),a.Mb()),2&o){const o=a.Yb(2);a.xb(1),a.Zb("ngIf",o.mobile.errors.required),a.xb(1),a.Zb("ngIf",o.mobile.errors.pattern)}}function I(o,e){1&o&&a.Jb(0,"i",15)}function z(o,e){if(1&o&&(a.Nb(0,"p",16),a.nc(1),a.Mb()),2&o){const o=a.Yb(2);a.xb(1),a.oc(o.errorMessage)}}function L(o,e){if(1&o){const o=a.Ob();a.Nb(0,"form",5),a.Nb(1,"div",6),a.Jb(2,"input",7),a.mc(3,k,3,2,"div",8),a.Mb(),a.Nb(4,"button",9),a.Ub("click",(function(){return a.gc(o),a.Yb().sendOtpToResetPassword()})),a.nc(5,"Send OTP"),a.mc(6,I,1,0,"i",10),a.Mb(),a.mc(7,z,2,1,"p",11),a.Mb()}if(2&o){const o=a.Yb();a.Zb("formGroup",o.mobileFormGroup),a.xb(3),a.Zb("ngIf",o.mobile.invalid&&(o.mobile.dirty||o.mobile.touched)),a.xb(3),a.Zb("ngIf",o.isLoading),a.xb(1),a.Zb("ngIf",o.errorMessage)}}function P(o,e){1&o&&(a.Nb(0,"div",12),a.Nb(1,"div",14),a.nc(2," OTP code is inavlid "),a.Mb(),a.Mb())}function F(o,e){1&o&&a.Jb(0,"i",15)}function q(o,e){if(1&o&&(a.Nb(0,"p",16),a.nc(1),a.Mb()),2&o){const o=a.Yb(2);a.xb(1),a.oc(o.errorMessage)}}function O(o,e){if(1&o){const o=a.Ob();a.Nb(0,"form",5),a.Nb(1,"div",6),a.Jb(2,"input",17),a.mc(3,P,3,0,"div",8),a.Nb(4,"a",18),a.nc(5,"Resend"),a.Mb(),a.Mb(),a.Nb(6,"button",9),a.Ub("click",(function(){return a.gc(o),a.Yb().verifyOtpToResetPassword()})),a.nc(7,"Submit OTP"),a.mc(8,F,1,0,"i",10),a.Mb(),a.mc(9,q,2,1,"p",11),a.Mb()}if(2&o){const o=a.Yb();a.Zb("formGroup",o.otpFormGroup),a.xb(3),a.Zb("ngIf",o.otp.invalid&&(o.otp.dirty||o.otp.touched)),a.xb(5),a.Zb("ngIf",o.isLoading),a.xb(1),a.Zb("ngIf",o.errorMessage)}}function T(o,e){1&o&&(a.Nb(0,"div",12),a.Nb(1,"div",14),a.nc(2," Password must contain atleast 6 characters, including upper/lowercase and numbers. "),a.Mb(),a.Mb())}function Z(o,e){1&o&&a.Jb(0,"i",15)}function G(o,e){if(1&o&&(a.Nb(0,"p",16),a.nc(1),a.Mb()),2&o){const o=a.Yb(2);a.xb(1),a.oc(o.errorMessage)}}function S(o,e){if(1&o){const o=a.Ob();a.Nb(0,"form",5),a.Nb(1,"div",19),a.Jb(2,"input",20),a.mc(3,T,3,0,"div",8),a.Mb(),a.Nb(4,"button",9),a.Ub("click",(function(){return a.gc(o),a.Yb().resetPassword()})),a.nc(5,"Reset Password"),a.mc(6,Z,1,0,"i",10),a.Mb(),a.mc(7,G,2,1,"p",11),a.Mb()}if(2&o){const o=a.Yb();a.Zb("formGroup",o.passwordFormGroup),a.xb(3),a.Zb("ngIf",o.password.invalid&&(o.password.dirty||o.password.touched)),a.xb(3),a.Zb("ngIf",o.isLoading),a.xb(1),a.Zb("ngIf",o.errorMessage)}}const R=function(){return["/authentication/login"]};let J=(()=>{class o{constructor(o,e,t){this._httpService=o,this._router=e,this.toastr=t,this.errorMessage=null,this.isLoading=!1,this.resetStep=1,this.forgotPassword=new y}ngOnInit(){this.mobileFormGroup=new r.e({mobile:new r.c(this.forgotPassword.mobile,[r.n.required,r.n.pattern("([0-9]{10,10})+")])}),this.otpFormGroup=new r.e({otp:new r.c(this.forgotPassword.otp,[r.n.required,r.n.pattern("^[0-9]*$"),r.n.minLength(6),r.n.maxLength(6)]),tocken:new r.c(null,null)}),this.passwordFormGroup=new r.e({password:new r.c(this.forgotPassword.password,[r.n.required,r.n.minLength(5),n.a.patternValidator(/\d/,{hasNumber:!0}),n.a.patternValidator(/[A-Za-z]/,{hasCapitalCase:!0})]),userId:new r.c(null,null)})}get mobile(){return this.mobileFormGroup.get("mobile")}get otp(){return this.otpFormGroup.get("otp")}get password(){return this.passwordFormGroup.get("password")}sendOtpToResetPassword(){this.isLoading||(this.mobileFormGroup.get("mobile").invalid?this.errorMessage="something went wrong !":(this.isLoading=!0,this.errorMessage=null,this._httpService.sendOtpToResetPassword(this.mobileFormGroup.value).subscribe(o=>{this.isLoading=!1,"success"==o.response&&(this.otpFormGroup.get("tocken").setValue(o.tocken),this.resetStep=2)},o=>{this.isLoading=!1,this.errorMessage=o.error})))}verifyOtpToResetPassword(){this.isLoading||(this.otpFormGroup.get("otp").invalid?this.errorMessage="something went wrong !":(this.isLoading=!0,this.errorMessage=null,this._httpService.verifyOtpToResetPassword(this.otpFormGroup.value).subscribe(o=>{this.isLoading=!1,"success"==o.response&&(this.passwordFormGroup.get("userId").setValue(o.userId),this.resetStep=3)},o=>{this.isLoading=!1,this.errorMessage=o.error})))}resetPassword(){this.isLoading||(this.passwordFormGroup.get("password").invalid?this.errorMessage="something went wrong !":(this.isLoading=!0,this.errorMessage=null,this._httpService.resetPassword(this.passwordFormGroup.value).subscribe(o=>{this.isLoading=!1,"success"==o.response&&this._router.navigate(["/authentication/login"])},o=>{this.isLoading=!1,this.errorMessage=o.error})))}}return o.\u0275fac=function(e){return new(e||o)(a.Ib(d),a.Ib(p.b),a.Ib(l.b))},o.\u0275cmp=a.Cb({type:o,selectors:[["app-forgotpassword"]],decls:11,vars:5,consts:[["for","",1,"logsign__container--title"],[3,"formGroup",4,"ngIf"],[1,"signup","mt-3"],["for","",1,"account_detail"],["routerLinkActive","router-link-active",1,"text-right",3,"routerLink"],[3,"formGroup"],[1,"form-group","mt-3"],["type","mobile","id","exampleInputEmail1","formControlName","mobile","placeholder","Mobile Number","aria-describedby","emailHelp",1,"form-control"],["class","alert alert-danger",4,"ngIf"],[1,"btn","bg-main","w-100","mt-2",2,"background-color","#008081","color","white",3,"click"],["class","fa fa-spin fa-spinner",4,"ngIf"],["class","error-msg","for","",4,"ngIf"],[1,"alert","alert-danger"],["class","err-font",4,"ngIf"],[1,"err-font"],[1,"fa","fa-spin","fa-spinner"],["for","",1,"error-msg"],["type","email","formControlName","otp","placeholder","Enter OTP","id","exampleInputEmail1","aria-describedby","emailHelp",1,"form-control","mb-1"],[1,"spaan"],[1,"form-group","mt-4"],["type","password","formControlName","password","placeholder","Password","id","exampleInputEmail1","aria-describedby","emailHelp","required","",1,"form-control"]],template:function(o,e){1&o&&(a.Nb(0,"label",0),a.nc(1,"FORGOT PASSWORD"),a.Mb(),a.mc(2,L,8,4,"form",1),a.mc(3,O,10,4,"form",1),a.mc(4,S,8,4,"form",1),a.Nb(5,"div",2),a.Nb(6,"label",3),a.nc(7,"Already have an account? "),a.Nb(8,"a",4),a.Nb(9,"b"),a.nc(10,"Login Now"),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&o&&(a.xb(2),a.Zb("ngIf",1==e.resetStep),a.xb(1),a.Zb("ngIf",2==e.resetStep),a.xb(1),a.Zb("ngIf",3==e.resetStep),a.xb(4),a.Zb("routerLink",a.bc(4,R)))},directives:[i.i,p.d,p.c,r.p,r.i,r.f,r.a,r.h,r.d,r.l],styles:[".logsign{width:100vw;height:100vh;overflow:hidden}.logsign__side-bg{height:100vh;width:100vw;padding:0}.logsign__side-bg img{height:100%}.logsign__logsign{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100vh;overflow-y:scroll;padding-left:0}.text-right{color:#008081}.logsign__logsign--privacy{text-align:center;font-size:14px;margin:3rem 0}.account_detail{text-align:center;justify-content:center;align-items:center;width:100%;margin:2rem 0}.logsign__container{width:80%;max-width:400px;min-width:300px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.logsign__container--img{display:block;width:80px;height:80px;margin:4rem auto 6rem}.logsign__container--title{font-size:28px;width:100%;text-align:center;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:5.8px;color:#1c4144}.logsign__container--subtitle{font-size:16px;width:100%;text-align:center;color:#222;opacity:.5}.logsign__container--form-group{margin:20px 0}.logsign__container--form-group label{font-size:14px}.logsign__container--form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.logsign__container--form-group .form-control:-ms-input-placeholder{color:#222}.logsign__container--form-group .form-control::-moz-placeholder{color:#222}.logsign__container--form-group .form-control::placeholder{color:#222}.logsign__container button{width:40%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.error-label,.error-msg,.error-para{font-size:14px;color:red;width:100%;text-align:center}.ng-valid.required,.ng-valid[required]{border-left:5px solid #42a948}.ng-invalid:not(form){border-left:5px solid #a94442}.alert{border:0;margin-bottom:0;background-color:#fff;padding:.5rem;color:red;font-size:smaller}.form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.spaan{color:#000;font-size:14px;margin-left:.8rem}@media (max-width:400px){.logsign__container button{width:100%;margin-bottom:15px}.logsign__container--title{font-size:22px}.logsign__container--subtitle{font-size:14px}.flex-parent{display:flex}}"],encapsulation:2}),o})(),K=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=a.Cb({type:o,selectors:[["app-layout"]],decls:10,vars:0,consts:[[1,"container-fluid","p-0","authentication-container"],[1,"d-flex","flex-wrap","logsign"],[1,"col-5","logsign__side-bg","d-md-block","d-none"],["src","../../../assets/img/log-img.png"],[1,"col-md-7","logsign__logsign"],[1,"logsign__container"],["src","../../../assets/img/echarge-logo.png","alt","",1,"logsign__container--img"],[1,"logsign__logsign--privacy"]],template:function(o,e){1&o&&(a.Nb(0,"div",0),a.Nb(1,"div",1),a.Nb(2,"div",2),a.Jb(3,"img",3),a.Mb(),a.Nb(4,"div",4),a.Nb(5,"div",5),a.Jb(6,"img",6),a.Jb(7,"router-outlet"),a.Mb(),a.Nb(8,"div",7),a.nc(9," Term of use. Privacy policy "),a.Mb(),a.Mb(),a.Mb(),a.Mb())},directives:[p.f],styles:[".logsign{width:100vw;height:100vh;overflow:hidden}.logsign__side-bg{height:100vh;width:100vw;padding:0}.logsign__side-bg img{height:100%}.logsign__logsign{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100vh;overflow-y:scroll;padding-left:0}.text-right{color:#008081}.logsign__logsign--privacy{text-align:center;font-size:14px;margin:3rem 0}.account_detail{text-align:center;justify-content:center;align-items:center;width:100%;margin:2rem 0}.logsign__container{width:80%;max-width:400px;min-width:300px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.logsign__container--img{display:block;width:80px;height:80px;margin:4rem auto 6rem}.logsign__container--title{font-size:28px;width:100%;text-align:center;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:5.8px;color:#1c4144}.logsign__container--subtitle{font-size:16px;width:100%;text-align:center;color:#222;opacity:.5}.logsign__container--form-group{margin:20px 0}.logsign__container--form-group label{font-size:14px}.logsign__container--form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.logsign__container--form-group .form-control:-ms-input-placeholder{color:#222}.logsign__container--form-group .form-control::-moz-placeholder{color:#222}.logsign__container--form-group .form-control::placeholder{color:#222}.logsign__container button{width:40%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.error-label,.error-msg,.error-para{font-size:14px;color:red;width:100%;text-align:center}.ng-valid.required,.ng-valid[required]{border-left:5px solid #42a948}.ng-invalid:not(form){border-left:5px solid #a94442}.alert{border:0;margin-bottom:0;background-color:#fff;padding:.5rem;color:red;font-size:smaller}.form-group .form-control{border:none;border-bottom:1px solid #e1e3e2;border-radius:0;box-shadow:none!important;font-size:14px}.spaan{color:#000;font-size:14px;margin-left:.8rem}@media (max-width:400px){.logsign__container button{width:100%;margin-bottom:15px}.logsign__container--title{font-size:22px}.logsign__container--subtitle{font-size:14px}.flex-parent{display:flex}}"],encapsulation:2}),o})();const C=[{path:"",canActivate:[t("RBmT").a],component:K,children:[{path:"login",component:v},{path:"forgotpassword",component:J}]}];let Y=(()=>{class o{}return o.\u0275mod=a.Gb({type:o}),o.\u0275inj=a.Fb({factory:function(e){return new(e||o)},imports:[[i.b,p.e.forChild(C),r.g,r.k]]}),o})()}}]);