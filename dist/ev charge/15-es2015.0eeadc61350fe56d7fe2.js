(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{cRhG:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfileModule",(function(){return V}));var o=i("SVse"),n=i("iInd"),r=i("RBmT"),s=i("QHKX"),a=i("GBx3"),d=i("8Y7J"),l=i("EApP"),c=i("tqRt"),g=i("F11b");const b=function(){return["/dashboard/profile/edit"]},p=function(){return["/dashboard/profile/reset"]};let m=(()=>{class e{constructor(e,t,i,o){this.toastr=e,this.store=t,this._httpService=i,this._router=o,this.loggedInUserId="",this.loggedInUserName="",this.profilePic="",this.loggedInUserEmail="",this.loggedInUserMobile=""}ngOnInit(){this.store.select(a.b).subscribe(e=>{e&&(console.log("getAppState reached"),console.log(e),"userId"==e.loggedInUserDetails.userId?this.getLoggedInAdminDetails():(this.loggedInUserId=e.loggedInUserDetails.userId,this.loggedInUserName=e.loggedInUserDetails.name,this.loggedInUserEmail=e.loggedInUserDetails.email,this.loggedInUserMobile=e.loggedInUserDetails.mobile,console.log("user details appstate reached"),console.log(this.loggedInUserId),console.log(this.loggedInUserName),console.log(this.profilePic),console.log(this.loggedInUserEmail),console.log(this.loggedInUserMobile)))})}getLoggedInAdminDetails(){this._httpService.getLoggedInAdminDetails().subscribe(e=>{console.log("getLoggedInAdminDetails"),console.log(e),e.userDetails&&(this.loggedInUserId=e.userDetails.id,this.loggedInUserName=e.userDetails.name,this.profilePic=e.userDetails.profilePic,this.loggedInUserEmail=e.userDetails.email,this.loggedInUserMobile=e.userDetails.mobile,this.profilePicMediaId=e.userDetails.profilePicMediaId,console.log("user details reached"),console.log(this.loggedInUserId),console.log(this.loggedInUserName),this.store.dispatch(s.b({loggedInUserDetails:{userId:this.loggedInUserId,name:this.loggedInUserName,email:this.loggedInUserEmail,mobile:this.loggedInUserMobile}})))},e=>{this._router.navigate(["/authentication/login"]),this.toastr.info("Please Login",e.error)})}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(l.b),d.Ib(c.h),d.Ib(g.a),d.Ib(n.b))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-profile-view"]],decls:29,vars:8,consts:[[1,"container"],[1,"profile-view"],[1,"profile-title"],[1,"heading-tag"],[1,"pro-detail"],[1,"pro-img"],["onerror","this.src='../../../assets/img/profilePic.jpg'","alt","",3,"src"],[1,"about-pro"],[1,"reset-block"],[1,"edit-bt"],[1,"edit-icon"],["aria-hidden","true",1,"fas","fa-edit"],[1,"text-label"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"reset-bt"],["aria-hidden","true",1,"fas","fa-key"]],template:function(e,t){1&e&&(d.Nb(0,"div",0),d.Nb(1,"div",1),d.Nb(2,"div",2),d.Nb(3,"div",3),d.Nb(4,"p"),d.nc(5,"My Profile"),d.Mb(),d.Mb(),d.Mb(),d.Nb(6,"div",4),d.Nb(7,"div",5),d.Jb(8,"img",6),d.Mb(),d.Nb(9,"div",7),d.Nb(10,"h2"),d.nc(11),d.Mb(),d.Nb(12,"p"),d.nc(13),d.Mb(),d.Nb(14,"a"),d.nc(15),d.Mb(),d.Nb(16,"div",8),d.Nb(17,"div",9),d.Nb(18,"div",10),d.Jb(19,"i",11),d.Mb(),d.Nb(20,"div",12),d.Nb(21,"a",13),d.nc(22,"Edit"),d.Mb(),d.Mb(),d.Mb(),d.Nb(23,"div",14),d.Nb(24,"div",10),d.Jb(25,"i",15),d.Mb(),d.Nb(26,"div",12),d.Nb(27,"a",13),d.nc(28,"Reset Password"),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e&&(d.xb(8),d.ac("src",t.profilePic,d.ic),d.xb(3),d.oc(t.loggedInUserName),d.xb(2),d.oc(t.loggedInUserMobile),d.xb(2),d.oc(t.loggedInUserEmail),d.xb(6),d.Zb("routerLink",d.bc(6,b)),d.xb(6),d.Zb("routerLink",d.bc(7,p)))},directives:[n.d,n.c],styles:[".container[_ngcontent-%COMP%]{margin-top:35px;width:auto;margin-left:305px}.heading-tag[_ngcontent-%COMP%]{font-weight:700;font-size:large}.profile-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:2px solid #e1e3e2}.pro-detail[_ngcontent-%COMP%], .upload-bt[_ngcontent-%COMP%]{display:flex}.pro-detail[_ngcontent-%COMP%]{width:100%;margin-top:2rem;padding:1rem}.about-pro[_ngcontent-%COMP%]{margin-left:2rem;width:50%}.reset-block[_ngcontent-%COMP%]{display:flex;margin-top:2rem}.edit-bt[_ngcontent-%COMP%], .reset-bt[_ngcontent-%COMP%]{display:flex}.reset-bt[_ngcontent-%COMP%]{margin-left:1rem}.pro-img[_ngcontent-%COMP%]{width:30%}.edit-icon[_ngcontent-%COMP%]{margin-right:.5rem}.edit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .text-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00a2ff}.upload-bt[_ngcontent-%COMP%]{position:relative;bottom:50px;z-index:5;left:20px;background-color:#fff;width:170px;padding-left:1rem;border-radius:50px;height:38px;padding-top:.5rem}.add-bt[_ngcontent-%COMP%]{margin-right:.5rem}.edit-view[_ngcontent-%COMP%]{padding:1rem}.edit-mainblock[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%}.edit-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.text-block[_ngcontent-%COMP%]{width:100%}.text-area[_ngcontent-%COMP%]{width:500px}.edit-block[_ngcontent-%COMP%]{margin-bottom:2rem}.save-button[_ngcontent-%COMP%]{width:150px}.name-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.profile-view[_ngcontent-%COMP%]{margin-top:50px;flex-direction:row;margin-bottom:60px;background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.1607843137254902);border-radius:12px;padding:2rem}.edit-area[_ngcontent-%COMP%]{color:#00a2ff;font-weight:700}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}@media (max-width:1200px){.pro-img[_ngcontent-%COMP%]{width:35%}}@media (max-width:992px){.container[_ngcontent-%COMP%]{margin-left:0}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}}@media (max-width:768px){.pro-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.about-pro[_ngcontent-%COMP%]{margin-left:0;margin-top:2rem;width:100%}.pro-img[_ngcontent-%COMP%]{width:100%}}"]}),e})();var h=i("gyNX"),u=i.n(h);class f{constructor(e="",t="",i="",o=""){this.name=e,this.email=t,this.mobile=i,this.userId=o}}var M=i("s7LF"),P=i("IheW");let I=(()=>{class e{constructor(e){this.http=e}updateProfile(e){return this.http.post("https://api.listnsell.in/api/user",{requestType:"updateProfile",requestBody:e},{observe:"body"})}resetPassword(e){return this.http.post("https://api.listnsell.in/api/user",{requestType:"updatePassword",requestBody:e},{observe:"body"})}uploadMedia(e){return this.http.post("https://api.listnsell.in/api/upload",e,{observe:"body"})}getLoggedInAdminDetails(){return this.http.post("https://api.listnsell.in/api/user",{requestType:"getLoggedInAdminDetails"},{observe:"body"})}}return e.\u0275fac=function(t){return new(t||e)(d.Rb(P.b))},e.\u0275prov=d.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function w(e,t){if(1&e){const e=d.Ob();d.Nb(0,"image-cropper",40),d.Ub("imageCropped",(function(t){return d.gc(e),d.Yb().profilePicCropped(t)}))("imageLoaded",(function(){return d.gc(e),d.Yb().imageLoaded()}))("cropperReady",(function(){return d.gc(e),d.Yb().cropperReady()}))("loadImageFailed",(function(){return d.gc(e),d.Yb().loadImageFailed()})),d.Mb()}if(2&e){const e=d.Yb();d.Zb("imageChangedEvent",e.profilePicChangedEvent)("maintainAspectRatio",!0)("aspectRatio",1)}}function C(e,t){if(1&e&&(d.Nb(0,"label",41),d.nc(1),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.oc(e.errorMessage)}}function v(e,t){1&e&&d.Jb(0,"i",42)}function x(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," Name is required. "),d.Mb())}function _(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," Name must be at least 4 characters long. "),d.Mb())}function O(e,t){if(1&e&&(d.Nb(0,"div",43),d.mc(1,x,2,0,"div",44),d.mc(2,_,2,0,"div",44),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.Zb("ngIf",e.name.errors.required),d.xb(1),d.Zb("ngIf",e.name.errors.minlength)}}function N(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," Mob.no is required. "),d.Mb())}function U(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," Mob.no must be atleast 10 digits "),d.Mb())}function y(e,t){if(1&e&&(d.Nb(0,"div",43),d.mc(1,N,2,0,"div",44),d.mc(2,U,2,0,"div",44),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.Zb("ngIf",e.mobile.errors.required),d.xb(1),d.Zb("ngIf",e.mobile.errors.pattern)}}function k(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," E-mail is required. "),d.Mb())}function F(e,t){1&e&&(d.Nb(0,"div",45),d.nc(1," You have entered an invalid e-mail address. "),d.Mb())}function D(e,t){if(1&e&&(d.Nb(0,"div",43),d.mc(1,k,2,0,"div",44),d.mc(2,F,2,0,"div",44),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.Zb("ngIf",e.email.errors.required),d.xb(1),d.Zb("ngIf",e.email.errors.pattern)}}function L(e,t){1&e&&d.Jb(0,"i",42)}function S(e,t){if(1&e&&(d.Nb(0,"p",46),d.nc(1),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.oc(e.errorMessage)}}let E=(()=>{class e{constructor(e,t,i,o,n){this.toastr=e,this.store=t,this._httpService=i,this.fb=o,this._router=n,this.update=new f,this.isConfirmPasswordSame=!0,this.errorMessage=null,this.isLoading=!1,this.isProfilePicCropped=!0,this.profilePicChangedEvent="",this.loggedInUserId="",this.loggedInUserName="",this.profilePic="",this.modalProfilePic="",this.loggedInUserEmail="",this.loggedInUserMobile=""}ngOnInit(){this.updateForm=new M.e({name:new M.c(this.update.name,[M.n.required,M.n.minLength(4)]),email:new M.c(this.update.email,[M.n.required,M.n.pattern("(^$)|(^.*@.*..*$)")]),mobile:new M.c(this.update.mobile,[M.n.required,M.n.pattern("([0-9]{10,10})+")]),userId:new M.c(null)}),this.store.select(a.b).subscribe(e=>{e&&(console.log("getAppState reached"),console.log(e),"userId"==e.loggedInUserDetails.userId?this.getLoggedInAdminDetails():(this.loggedInUserId=e.loggedInUserDetails.userId,this.loggedInUserName=e.loggedInUserDetails.name,this.loggedInUserEmail=e.loggedInUserDetails.email,this.loggedInUserMobile=e.loggedInUserDetails.mobile,this.initializedFormData(),console.log("user details appstate reached"),console.log(this.loggedInUserId),console.log(this.loggedInUserName),console.log(this.profilePic),console.log(this.loggedInUserEmail),console.log(this.loggedInUserMobile),console.log(this.profilePicMediaId)))})}get name(){return this.updateForm.get("name")}get email(){return this.updateForm.get("email")}get mobile(){return this.updateForm.get("mobile")}get userId(){return this.updateForm.get("userId")}save(){console.log(this.updateForm),console.log("saved: "+JSON.stringify(this.updateForm.value))}submit(){this.isLoading||(console.log("not is loading"),this.checkIfFormValid()&&(console.log("form valid"),this.updateProfile()))}getLoggedInAdminDetails(){this._httpService.getLoggedInAdminDetails().subscribe(e=>{console.log("getLoggedInAdminDetails"),console.log(e),e.userDetails&&(this.loggedInUserId=e.userDetails.id,this.loggedInUserName=e.userDetails.name,this.profilePic=e.userDetails.profilePic,this.modalProfilePic=e.userDetails.profilePic,this.loggedInUserEmail=e.userDetails.email,this.loggedInUserMobile=e.userDetails.mobile,this.profilePicMediaId=e.userDetails.profilePicMediaId,this.initializedFormData(),console.log("user details reached"),console.log(this.loggedInUserId),console.log(this.loggedInUserName),console.log(this.profilePicMediaId),this.store.dispatch(s.b({loggedInUserDetails:{userId:this.loggedInUserId,name:this.loggedInUserName,email:this.loggedInUserEmail,mobile:this.loggedInUserMobile}})))},e=>{this._router.navigate(["/authentication/login"]),this.toastr.info("Please Login",e.error)})}initializedFormData(){this.updateForm.get("name").setValue(this.loggedInUserName),this.updateForm.get("email").setValue(this.loggedInUserEmail),this.updateForm.get("mobile").setValue(this.loggedInUserMobile),this.updateForm.get("userId").setValue(this.loggedInUserId)}updateProfile(){console.log("update reached"),this.errorMessage=null,this.isLoading=!0,this._httpService.updateProfile(this.updateForm.value).subscribe(e=>{console.log("data reached"),this.isLoading=!1,"success"==e.response&&this.toastr.success("Success! Your updation is complete")},e=>{console.log("errors reached"),console.log(e),this.isLoading=!1,this.errorMessage=e.error})}checkIfFormValid(){return!this.updateForm.invalid||(this.errorMessage="somthing went wrong !",!1)}previewProfilePic(e){let t=[];t=e.target.files,t.length>1?this.errorMessage="Please select a single image file":(null==t[0].type.match(/video\/*/)&&null==t[0].type.match(/image\/*/)&&(this.errorMessage="Please select a single image file"),this.isProfilePicCropped=!0,this.profilePicChangedEvent=e,this.profilePicFile=t[0])}uploadMedias(e){const t=new FormData;t.append("associatedId",e),t.append("directory","users/"+e),null!=this.profilePic&&t.append("profilePic",this.profilePicFile,this.profilePicFile.name),this._httpService.uploadMedia(t).subscribe(t=>{"success"==t.response&&(this._router.navigate(["/dashboard/profile/"+e]),this.toastr.success("Registration Successful","Welcome to Listnell, "+this.name))},e=>{this.errorMessage=e.error+",Please double check and try again"})}uploadProfilePic(){const e=new FormData;e.append("associatedId",this.loggedInUserId),e.append("mediaId",this.profilePicMediaId),e.append("directory","users/"+this.loggedInUserId),null!=this.profilePicFile?(e.append("profilePic",this.profilePicFile,this.profilePicFile.name),this._httpService.uploadMedia(e).subscribe(e=>{"success"==e.response&&(console.log("profile pic updated"),this.getLoggedInAdminDetails(),u.a.modal("#modal-upload").hide(),this.toastr.success("Profile Pic Updated Successfully","Success"))},e=>{this.toastr.info("Could you please try again?",e.error)})):this.toastr.info("Please Choose New Profile Pic to upload","Select a File")}profilePicCropped(e){console.log("profilePicCropped"),this.modalProfilePic=e.base64,this.isProfilePicCropped=!1}imageLoaded(){}cropperReady(){}loadImageFailed(){}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(l.b),d.Ib(c.h),d.Ib(I),d.Ib(M.b),d.Ib(n.b))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-profile-edit"]],decls:65,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"container"],[1,"profile-view"],[1,"profile-title"],[1,"heading-tag"],[1,"edit-area"],[1,"pro-img"],["onerror","this.src='../../../assets/img/profilePic.jpg'","alt","",1,"pro-pic",3,"src"],[1,"upload-bt"],[1,"add-bt"],["src","../../../../assets/img/camera-icon.png"],[1,"upadte-label"],["uk-toggle","target: #modal-upload",1,"uk-margin-small-right"],["id","modal-upload","uk-modal",""],[1,"uk-modal-dialog","uk-modal-body","upload-block"],[1,"heading"],[1,"profile-pic-container","mt-3",3,"click"],["id","itemIcon","onerror","this.src='../../../assets/img/profilePic.jpg'",1,"card-img","upload-pic",3,"src"],["format","png",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","imageCropped","imageLoaded","cropperReady","loadImageFailed",4,"ngIf"],[1,"bt-block","mt-3"],["for","",1,"subtitle",3,"click"],["type","file","accept","image/*","name","picture","required","",2,"display","none",3,"change"],["mediaInput",""],[1,"error-message","mt-3"],["for","",4,"ngIf"],[1,"button-block"],[1,"btn","btn-primary","mt-3","update-button",3,"click"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"edit-view"],[1,"edit-mainblock"],[1,"edit-block"],[1,"name-label"],[1,"text-block"],["type","text","placeholder","Enter your name","required","","formControlName","name",1,"text-area"],["class","alert alert-danger",4,"ngIf"],["type","text","placeholder","Enter Your Mob.no","formControlName","mobile","required","",1,"text-area"],["type","text","placeholder","Enter your Email Id","formControlName","email","required","",1,"text-area"],[1,"edit-main-block"],[1,"btn","btn-primary","mt-3","save-button",3,"click"],["class","error-msg","for","",4,"ngIf"],["format","png",3,"imageChangedEvent","maintainAspectRatio","aspectRatio","imageCropped","imageLoaded","cropperReady","loadImageFailed"],["for",""],[1,"fa","fa-spin","fa-spinner"],[1,"alert","alert-danger"],["class","err-font",4,"ngIf"],[1,"err-font"],["for","",1,"error-msg"]],template:function(e,t){if(1&e){const e=d.Ob();d.Nb(0,"form",0),d.Ub("ngSubmit",(function(){return t.submit()})),d.Nb(1,"div",1),d.Nb(2,"div",2),d.Nb(3,"div",3),d.Nb(4,"div",4),d.Nb(5,"p"),d.nc(6,"Edit Profile"),d.Mb(),d.Mb(),d.Jb(7,"div",5),d.Mb(),d.Nb(8,"div",6),d.Jb(9,"img",7),d.Nb(10,"div",8),d.Nb(11,"div",9),d.Jb(12,"img",10),d.Mb(),d.Nb(13,"div",11),d.Nb(14,"a",12),d.nc(15,"Update Photo"),d.Mb(),d.Mb(),d.Nb(16,"div",13),d.Nb(17,"div",14),d.Nb(18,"div",15),d.Nb(19,"h3"),d.nc(20,"Update Photo"),d.Mb(),d.Mb(),d.Nb(21,"div",16),d.Ub("click",(function(){d.gc(e);const i=d.ec(28);return[t.isProfilePicCropped=!0,i.click()]})),d.Jb(22,"img",17),d.mc(23,w,1,3,"image-cropper",18),d.Mb(),d.Nb(24,"div",19),d.Nb(25,"a",20),d.Ub("click",(function(){return d.gc(e),d.ec(28).click()})),d.nc(26,"Choose a File"),d.Mb(),d.Nb(27,"input",21,22),d.Ub("change",(function(e){return t.previewProfilePic(e)})),d.Mb(),d.Mb(),d.Nb(29,"div",23),d.mc(30,C,2,1,"label",24),d.Mb(),d.Nb(31,"div",25),d.Nb(32,"button",26),d.Ub("click",(function(){return t.uploadProfilePic()})),d.nc(33,"Update"),d.mc(34,v,1,0,"i",27),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Nb(35,"div",28),d.Nb(36,"div",29),d.Nb(37,"div",30),d.Nb(38,"div",31),d.Nb(39,"p"),d.nc(40,"Full Name"),d.Mb(),d.Mb(),d.Nb(41,"div",32),d.Jb(42,"input",33),d.mc(43,O,3,2,"div",34),d.Mb(),d.Mb(),d.Nb(44,"div",30),d.Nb(45,"div",31),d.Nb(46,"p"),d.nc(47,"Mobile"),d.Mb(),d.Mb(),d.Nb(48,"div",32),d.Jb(49,"input",35),d.mc(50,y,3,2,"div",34),d.Mb(),d.Mb(),d.Mb(),d.Nb(51,"div",29),d.Nb(52,"div",30),d.Nb(53,"div",31),d.Nb(54,"p"),d.nc(55,"Email"),d.Mb(),d.Mb(),d.Nb(56,"div",32),d.Jb(57,"input",36),d.mc(58,D,3,2,"div",34),d.Mb(),d.Mb(),d.Mb(),d.Nb(59,"div",37),d.Nb(60,"div",25),d.Nb(61,"button",38),d.Ub("click",(function(){return t.submit()})),d.nc(62,"Save"),d.mc(63,L,1,0,"i",27),d.Mb(),d.mc(64,S,2,1,"p",39),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()}2&e&&(d.Zb("formGroup",t.updateForm),d.xb(9),d.ac("src",t.profilePic,d.ic),d.xb(13),d.Zb("src",t.modalProfilePic,d.ic),d.xb(1),d.Zb("ngIf",t.isProfilePicCropped),d.xb(7),d.Zb("ngIf",t.errorMessage),d.xb(4),d.Zb("ngIf",t.isLoading),d.xb(9),d.Zb("ngIf",t.name.invalid&&(t.name.dirty||t.name.touched)),d.xb(7),d.Zb("ngIf",t.mobile.invalid&&(t.mobile.dirty||t.mobile.touched)),d.xb(8),d.Zb("ngIf",t.email.invalid&&(t.email.dirty||t.email.touched)),d.xb(5),d.Zb("ngIf",t.isLoading),d.xb(1),d.Zb("ngIf",t.errorMessage))},directives:[M.p,M.i,M.f,o.i,M.a,M.l,M.h,M.d],styles:[".container[_ngcontent-%COMP%]{margin-top:35px;width:auto;margin-left:305px}.heading-tag[_ngcontent-%COMP%]{font-weight:700;font-size:large}.profile-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:2px solid #e1e3e2}.upload-bt[_ngcontent-%COMP%]{display:flex}.upload-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:30%}.upadte-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.bt-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .upadte-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00a2ff}.pro-img[_ngcontent-%COMP%]{width:100%;margin-top:2rem;padding:1rem}.heading[_ngcontent-%COMP%]{align-items:center;text-align:center}.button-block[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%], .update-button[_ngcontent-%COMP%]{width:100%}.upload-bt[_ngcontent-%COMP%]{position:relative;bottom:50px;z-index:5;left:27px;background-color:#fff;width:170px;padding-left:1rem;border-radius:50px;height:38px;padding-top:.5rem}.add-bt[_ngcontent-%COMP%]{margin-right:.5rem}.edit-view[_ngcontent-%COMP%]{padding:1rem}.edit-mainblock[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%}.edit-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.text-block[_ngcontent-%COMP%]{width:100%}.text-area[_ngcontent-%COMP%]{width:500px}.edit-block[_ngcontent-%COMP%]{margin-bottom:2rem}.save-button[_ngcontent-%COMP%]{width:150px}.pro-pic[_ngcontent-%COMP%]{width:27%}.name-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.profile-view[_ngcontent-%COMP%]{margin-top:50px;flex-direction:row;margin-bottom:60px;background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.1607843137254902);border-radius:12px;padding:2rem}.edit-area[_ngcontent-%COMP%]{color:#00a2ff;font-weight:700}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}.alert[_ngcontent-%COMP%]{border:0;margin-bottom:0;background-color:#fff;padding:.5rem;color:red;font-size:smaller}.error-para[_ngcontent-%COMP%]{margin-left:1rem}.error-label[_ngcontent-%COMP%], .error-msg[_ngcontent-%COMP%], .error-para[_ngcontent-%COMP%]{font-size:14px;color:red}.error-label[_ngcontent-%COMP%]{margin-left:6rem}@media (max-width:1200px){.upload-block[_ngcontent-%COMP%]{width:40%}.pro-pic[_ngcontent-%COMP%]{width:35%}}@media (max-width:992px){.container[_ngcontent-%COMP%]{margin-left:0}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}.upload-block[_ngcontent-%COMP%]{width:50%}}@media (max-width:768px){.upload-block[_ngcontent-%COMP%]{width:60%}.pro-pic[_ngcontent-%COMP%]{width:35%}}@media (max-width:576px){.upload-block[_ngcontent-%COMP%]{width:70%}.pro-pic[_ngcontent-%COMP%]{width:50%}}@media (max-width:400px){.upload-block[_ngcontent-%COMP%]{width:90%}.pro-pic[_ngcontent-%COMP%]{width:80%}.upload-bt[_ngcontent-%COMP%]{left:0;width:165px}}@media (max-width:300px){.pro-pic[_ngcontent-%COMP%], .upload-block[_ngcontent-%COMP%]{width:100%}.upload-bt[_ngcontent-%COMP%]{left:0;width:165px}}"]}),e})();class A{constructor(e="",t="",i=""){this.password=e,this.confirmPassword=t,this.userId=i}}var Z=i("c8u5");function q(e,t){1&e&&(d.Nb(0,"div",18),d.Nb(1,"div",19),d.nc(2," Password must contain atleast 6 characters, including upper/lowercase and numbers. "),d.Mb(),d.Mb())}function z(e,t){1&e&&(d.Nb(0,"div",18),d.Nb(1,"div",19),d.nc(2," Confirm Pasword must be same as password. "),d.Mb(),d.Mb())}function J(e,t){1&e&&d.Jb(0,"i",20)}function R(e,t){if(1&e&&(d.Nb(0,"p",21),d.nc(1),d.Mb()),2&e){const e=d.Yb();d.xb(1),d.oc(e.errorMessage)}}const Y=[{path:"view",canActivate:[r.a],component:m},{path:"edit",canActivate:[r.a],component:E},{path:"reset",canActivate:[r.a],component:(()=>{class e{constructor(e,t,i,o,n){this.toastr=e,this.store=t,this._httpService=i,this.fb=o,this._router=n,this.reset=new A,this.isConfirmPasswordSame=!0,this.errorMessage=null,this.isLoading=!1,this.loggedInUserId=""}ngOnInit(){this.resetForm=new M.e({password:new M.c(this.reset.password,[M.n.required,M.n.minLength(5),Z.a.patternValidator(/\d/,{hasNumber:!0}),Z.a.patternValidator(/[A-Za-z]/,{hasCapitalCase:!0})]),confirmPassword:new M.c(this.reset.confirmPassword,[M.n.required,M.n.minLength(5),Z.a.patternValidator(/\d/,{hasNumber:!0}),Z.a.patternValidator(/[A-Za-z]/,{hasCapitalCase:!0})]),userId:new M.c(null)}),this.resetForm.get("confirmPassword").valueChanges.subscribe(e=>{console.log("confirmPassword"),console.log(e),console.log(this.resetForm.get("password").value),this.resetForm.get("password").value!=e?(console.log("confirmPassword not equal"),this.isConfirmPasswordSame=!1):(console.log("confirmPassword equal"),this.isConfirmPasswordSame=!0)}),this.store.select(a.b).subscribe(e=>{e&&(console.log("getAppState reached"),console.log(e),"userId"==e.loggedInUserDetails.userId?this.getLoggedInAdminDetails():(this.loggedInUserId=e.loggedInUserDetails.userId,this.initializedFormData(),console.log("user details appstate reached"),console.log(this.loggedInUserId)))})}get password(){return this.resetForm.get("password")}get confirmPassword(){return this.resetForm.get("confirmPassword")}get userId(){return this.resetForm.get("userId")}save(){console.log(this.resetForm),console.log("saved: "+JSON.stringify(this.resetForm.value))}submit(){this.isLoading||(console.log("not is loading"),this.checkIfFormValid()&&(console.log("form valid"),this.resetPassword()))}initializedFormData(){this.resetForm.get("userId").setValue(this.loggedInUserId)}resetPassword(){console.log("reset reached"),this.errorMessage=null,this.isLoading=!0,this._httpService.resetPassword(this.resetForm.value).subscribe(e=>{console.log("data reached"),this.isLoading=!1,"success"==e.response&&this.toastr.success("Success! Your password is changed")},e=>{console.log("error reached"),console.log(e.error),this.isLoading=!1,this.errorMessage=e.error})}getLoggedInAdminDetails(){this._httpService.getLoggedInAdminDetails().subscribe(e=>{console.log("getLoggedInAdminDetails"),console.log(e),e.userDetails&&(this.loggedInUserId=e.userDetails.id,this.initializedFormData())},e=>{this._router.navigate(["/authentication/login"]),this.toastr.info("Please Login",e.error)})}checkIfFormValid(){return!this.resetForm.invalid||(this.errorMessage="somthing went wrong !",!1)}}return e.\u0275fac=function(t){return new(t||e)(d.Ib(l.b),d.Ib(c.h),d.Ib(I),d.Ib(M.b),d.Ib(n.b))},e.\u0275cmp=d.Cb({type:e,selectors:[["app-password-reset"]],decls:29,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"container"],[1,"profile-view"],[1,"profile-title"],[1,"heading-tag"],[1,"edit-view"],[1,"edit-mainblock"],[1,"edit-block"],[1,"name-label"],[1,"text-block"],["type","password","placeholder","Enter your new password","id","exampleInputPassword1","formControlName","password","required","",1,"text-area"],["class","alert alert-danger",4,"ngIf"],["type","password","placeholder","Confirm your new password","formControlName","confirmPassword","id","exampleInputPassword1",1,"text-area"],[1,"edit-main-block"],[1,"button-block"],[1,"btn","btn-primary","mt-3","save-button",3,"click"],["class","fa fa-spin fa-spinner",4,"ngIf"],["class","error-msg","for","",4,"ngIf"],[1,"alert","alert-danger"],[1,"err-font"],[1,"fa","fa-spin","fa-spinner"],["for","",1,"error-msg"]],template:function(e,t){1&e&&(d.Nb(0,"form",0),d.Ub("ngSubmit",(function(){return t.submit()})),d.Nb(1,"div",1),d.Nb(2,"div",2),d.Nb(3,"div",3),d.Nb(4,"div",4),d.Nb(5,"p"),d.nc(6,"Reset Password"),d.Mb(),d.Mb(),d.Mb(),d.Nb(7,"div",5),d.Nb(8,"div",6),d.Nb(9,"div",7),d.Nb(10,"div",8),d.Nb(11,"p"),d.nc(12,"New Password"),d.Mb(),d.Mb(),d.Nb(13,"div",9),d.Jb(14,"input",10),d.mc(15,q,3,0,"div",11),d.Mb(),d.Mb(),d.Nb(16,"div",7),d.Nb(17,"div",8),d.Nb(18,"p"),d.nc(19,"Confirm Password"),d.Mb(),d.Mb(),d.Nb(20,"div",9),d.Jb(21,"input",12),d.mc(22,z,3,0,"div",11),d.Mb(),d.Mb(),d.Mb(),d.Nb(23,"div",13),d.Nb(24,"div",14),d.Nb(25,"button",15),d.Ub("click",(function(){return t.submit()})),d.nc(26,"Submit"),d.mc(27,J,1,0,"i",16),d.Mb(),d.mc(28,R,2,1,"p",17),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb(),d.Mb()),2&e&&(d.Zb("formGroup",t.resetForm),d.xb(15),d.Zb("ngIf",t.password.invalid&&(t.password.dirty||t.password.touched)),d.xb(7),d.Zb("ngIf",t.confirmPassword.invalid&&(t.confirmPassword.dirty||t.confirmPassword.touched)||!t.isConfirmPasswordSame),d.xb(5),d.Zb("ngIf",t.isLoading),d.xb(1),d.Zb("ngIf",t.errorMessage))},directives:[M.p,M.i,M.f,M.a,M.h,M.d,M.l,o.i],styles:[".container[_ngcontent-%COMP%]{margin-top:35px;width:auto;margin-left:305px}.heading-tag[_ngcontent-%COMP%]{font-weight:700;font-size:large}.profile-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:2px solid #e1e3e2}.pro-detail[_ngcontent-%COMP%], .upload-bt[_ngcontent-%COMP%]{display:flex}.pro-detail[_ngcontent-%COMP%]{width:100%;margin-top:2rem;padding:1rem}.about-pro[_ngcontent-%COMP%]{margin-left:2rem;width:50%}.reset-block[_ngcontent-%COMP%]{display:flex;margin-top:2rem}.edit-bt[_ngcontent-%COMP%], .reset-bt[_ngcontent-%COMP%]{display:flex}.reset-bt[_ngcontent-%COMP%]{margin-left:1rem}.pro-img[_ngcontent-%COMP%]{width:30%}.edit-icon[_ngcontent-%COMP%]{margin-right:.5rem}.edit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .text-label[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00a2ff}.upload-bt[_ngcontent-%COMP%]{position:relative;bottom:50px;z-index:5;left:20px;background-color:#fff;width:170px;padding-left:1rem;border-radius:50px;height:38px;padding-top:.5rem}.add-bt[_ngcontent-%COMP%]{margin-right:.5rem}.edit-view[_ngcontent-%COMP%]{padding:1rem}.edit-mainblock[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%}.edit-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.text-block[_ngcontent-%COMP%]{width:100%}.text-area[_ngcontent-%COMP%]{width:500px}.edit-block[_ngcontent-%COMP%]{margin-bottom:2rem}.save-button[_ngcontent-%COMP%]{width:150px}.name-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.profile-view[_ngcontent-%COMP%]{margin-top:50px;flex-direction:row;margin-bottom:60px;background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(0,0,0,.1607843137254902);border-radius:12px;padding:2rem}.edit-area[_ngcontent-%COMP%]{color:#00a2ff;font-weight:700}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}.alert[_ngcontent-%COMP%]{border:0;margin-bottom:0;background-color:#fff;padding:.5rem;color:red;font-size:smaller}.error-para[_ngcontent-%COMP%]{margin-left:1rem}.error-label[_ngcontent-%COMP%], .error-msg[_ngcontent-%COMP%], .error-para[_ngcontent-%COMP%]{font-size:14px;color:red}.error-label[_ngcontent-%COMP%]{margin-left:6rem}@media (max-width:1200px){.pro-img[_ngcontent-%COMP%]{width:35%}}@media (max-width:992px){.container[_ngcontent-%COMP%]{margin-left:0}.text-area[_ngcontent-%COMP%]{width:100%;font-size:small;padding:.5rem}}@media (max-width:768px){.pro-detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.about-pro[_ngcontent-%COMP%]{margin-left:0;margin-top:2rem;width:100%}.pro-img[_ngcontent-%COMP%]{width:100%}}"]}),e})()}];let V=(()=>{class e{}return e.\u0275mod=d.Gb({type:e}),e.\u0275inj=d.Fb({factory:function(t){return new(t||e)},imports:[[o.b,n.e.forChild(Y),M.k]]}),e})()}}]);