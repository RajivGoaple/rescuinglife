webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_validation_otp_validation__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {Helper} from '../../Helper/Helper'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.registerCredentials = { username: '', password: '' };
        this.mobileNumber = "";
    }
    LoginPage.prototype.login = function () {
        if (this.mobileNumber == "1234") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__otp_validation_otp_validation__["a" /* OtpValidationPage */]);
        }
        else {
            this.presentToast("Coudn't find user, Please register", 10000);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], this.mobileNumber);
        }
    };
    LoginPage.prototype.presentToast = function (msg, duration) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: duration
        });
        toast.present();
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], this.mobileNumber);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\login\login.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Login \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content class="login-content" padding>\n    <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img src="assets/imgs/300x200.png"/>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <div class="login-box">\n      <form #registerForm="ngForm">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n              \n              <ion-item>\n                <ion-input type="text" placeholder="Mobile Number" name="mobilenumber" [(ngModel)]="mobileNumber" required></ion-input>\n              </ion-item>\n<!--               \n              <ion-item>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n               -->\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit" (click)="login()" [disabled]="!registerForm.form.valid">Login</button>\n            <button ion-button class="register-btn" block clear (click)="createAccount()">Register</button>\n          </ion-col>\n        </ion-row>\n        \n      </form>\n    </div>\n  </ion-content>\n</ion-content>\n`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_validation_otp_validation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_User__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__Models_User__["a" /* User */]();
        if (navParams != null && navParams.data != "") {
            this.user.Mobile = navParams.data;
        }
    }
    RegisterPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_validation_otp_validation__["a" /* OtpValidationPage */], this.user.Mobile);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\register\register.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Registration\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n      <ion-item>\n          <!-- <ion-input placeholder="First Name"></ion-input> -->\n          <ion-label color="primary">User Type</ion-label>\n           <ion-select [(ngModel)]="user.Type">\n             <ion-option value="user" selected>Indivisual User</ion-option>\n             <ion-option value="ngo">NGO</ion-option>\n           </ion-select>\n        </ion-item>\n    <ion-item *ngIf="user.Type==\'ngo\'" >\n      <!-- <ion-input placeholder="First Name"></ion-input> -->\n      <ion-label  color="primary">Organization Name:</ion-label>\n      <ion-input [(ngModel)]="user.OrgnizationName"></ion-input>\n    </ion-item>\n        \n    <ion-item *ngIf="user.Type==\'ngo\'">\n        <!-- <ion-textarea placeholder="Address"></ion-textarea> -->\n        <ion-label color="primary">About Organization</ion-label>\n        <ion-textarea [(ngModel)]="user.AboutOrgnization"></ion-textarea>\n      </ion-item> \n\n    <ion-item>\n        <!-- <ion-input placeholder="First Name"></ion-input> -->\n        <ion-label color="primary">First Name</ion-label>\n        <ion-input [(ngModel)]="user.FirstName"></ion-input>\n      </ion-item>\n    <ion-item>\n      <!-- <ion-input placeholder="Last Name"></ion-input> -->\n      <ion-label color="primary">Last Name</ion-label>\n      <ion-input [(ngModel)]="user.LastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-input type="email" placeholder="Email"></ion-input> -->\n      <ion-label color="primary">Email </ion-label>\n      <ion-input [(ngModel)]="user.Email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-input placeholder="Phone Number"></ion-input> -->\n      <ion-label color="primary">Mobile Number</ion-label>\n      <ion-input [(ngModel)]="user.Mobile"></ion-input>\n    </ion-item>\n    <ion-item>\n      <!-- <ion-input placeholder="First Name"></ion-input> -->\n      <ion-label color="primary">Preffered Location</ion-label>\n      <ion-input [(ngModel)]="user.PrefferedLocation"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <!-- <ion-textarea placeholder="Address"></ion-textarea> -->\n      <ion-label color="primary">Address</ion-label>\n      <ion-textarea [(ngModel)]="user.Address"></ion-textarea>\n    </ion-item> \n  </ion-list>\n\n  <button ion-button full (click)="register()">Register</button>\n \n</ion-content>\n `/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UploadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadDetailsPage = (function () {
    function UploadDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadDetailsPage');
    };
    UploadDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-details',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\upload-details\upload-details.html"*/`<ion-header>\n    <ion-navbar>\n      <ion-title>Hadpsar - Cloths</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n  \n    <ion-card>\n   \n      <ion-slides pager>\n          \n            <ion-slide>\n              <div style="width:100%;height:30%">\n                  <img src="assets/imgs/cloths1.jpg" style="width:100%" />\n              </div>\n            </ion-slide>\n          \n            <ion-slide>\n                <div style="width:100%;height:30%">\n                <img src="assets/imgs/cloths2.jpg" style="width:100%"/></div>\n            </ion-slide> \n          </ion-slides>\n\n  \n      <ion-card-content>\n        <ion-card-title>\n          Sachin T\n        </ion-card-title>\n        <p>\n          I have cloths to donate, used cloths , need to collect from Swargate\n        </p>\n      </ion-card-content>\n  \n      <ion-item>\n        <!-- <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon> -->\n        <ion-icon name="contact"></ion-icon>\n        Rating of User\n        <ion-badge item-end>4</ion-badge>\n      </ion-item>\n  \n      <ion-item>\n          <!-- <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon> -->\n          <ion-icon name="create"></ion-icon>\n          Address \n          <ion-badge item-end>Hadapsar near magarpatta, Pune 40404</ion-badge>\n        </ion-item>\n\n\n      <ion-item>\n          <!-- <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon> -->\n          <ion-icon name="call"></ion-icon>\n          \n          Mobile \n          <ion-badge item-end>+91-9767752773</ion-badge>\n        </ion-item>\n\n        \n      <ion-item> \n       <button ion-button>Accept</button>\n       <button ion-button color="danger">Decline</button>\n      </ion-item>\n  \n    </ion-card>\n  \n  </ion-content>`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\upload-details\upload-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UploadDetailsPage);
    return UploadDetailsPage;
}());

//# sourceMappingURL=upload-details.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_upload_details_upload_details__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UploadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadListPage = (function () {
    function UploadListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadListPage');
    };
    UploadListPage.prototype.showDetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_upload_details_upload_details__["a" /* UploadDetailsPage */]);
    };
    UploadListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-list',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\upload-list\upload-list.html"*/`<ion-header>\n    <ion-toolbar>\n        <ion-buttons left>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title>Uploaded Items</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="outer-content">\n    <ion-list>\n      <ion-list-header>\n       Food\n      </ion-list-header>\n  \n      <ion-item-sliding>\n        <ion-item (click)="showDetails()">\n          <ion-avatar item-start>\n            <img src="assets/imgs/venkman.jpg">\n          </ion-avatar>\n          <h2>Hadpsar</h2>\n          <p>20 KG Biryani Rice, Till 3PM.</p>\n        </ion-item>\n        <ion-item-options>\n            <button ion-button color="primary" icon-start>\n                <ion-icon name="checkmark-circle"></ion-icon>\n              Accept\n            </button>\n            <button ion-button color="secondary" icon-start>\n                <ion-icon name="close-circle"></ion-icon>\n              Decline\n            </button> \n        </ion-item-options>\n      </ion-item-sliding>\n  \n  \n      <ion-item-sliding>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/barrett.jpg">\n          </ion-avatar>\n          <h2>PUNE</h2>\n          <p>10 KG Biryani Rice, Till 3PM.</p>\n        </ion-item>\n        <ion-item-options>\n            <button ion-button color="primary" icon-start>\n                <ion-icon name="checkmark-circle"></ion-icon>\n              Accept\n            </button>\n            <button ion-button color="secondary" icon-start>\n                <ion-icon name="close-circle"></ion-icon>\n              Decline\n            </button>\n        </ion-item-options>\n      </ion-item-sliding>\n\n    </ion-list>\n  \n    <ion-list>\n      <ion-list-header>\n        Cloths\n      </ion-list-header>\n  \n      <ion-item-sliding>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/venkman.jpg">\n          </ion-avatar>\n          <h2>100 Shirts</h2>\n          <p>Near Swarget</p>\n        </ion-item>\n        <ion-item-options> \n            <button ion-button color="primary" icon-start>\n                <ion-icon name="checkmark-circle"></ion-icon>\n              Accept\n            </button>\n            <button ion-button color="secondary" icon-start>\n                <ion-icon name="close-circle"></ion-icon>\n              Decline\n            </button>\n        </ion-item-options>\n      </ion-item-sliding>\n  \n      <ion-item-sliding>\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="assets/imgs/venkman.jpg">\n            </ion-avatar>\n            <h2>Sweat Shirts to Donate</h2>\n            <p>Near Nigadi</p>\n          </ion-item>\n          <ion-item-options> \n              <button ion-button color="primary" icon-start>\n                  <ion-icon name="checkmark-circle"></ion-icon>\n                Accept\n              </button>\n              <button ion-button color="secondary" icon-start>\n                  <ion-icon name="close-circle"></ion-icon>\n                Decline\n              </button>\n          </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/venkman.jpg">\n              </ion-avatar>\n              <h2>T-Shirts</h2>\n              <p>Malwadi</p>\n            </ion-item>\n            <ion-item-options> \n                <button ion-button color="primary" icon-start>\n                    <ion-icon name="checkmark-circle"></ion-icon>\n                  Accept\n                </button>\n                <button ion-button color="secondary" icon-start>\n                    <ion-icon name="close-circle"></ion-icon>\n                  Decline\n                </button>\n            </ion-item-options>\n          </ion-item-sliding>\n          <ion-item-sliding>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="assets/imgs/venkman.jpg">\n                </ion-avatar>\n                <h2>20 Formal Shoes</h2>\n                <p>Near Gadital, Hadpsar</p>\n              </ion-item>\n              <ion-item-options> \n                  <button ion-button color="primary" icon-start>\n                      <ion-icon name="checkmark-circle"></ion-icon>\n                    Accept\n                  </button>\n                  <button ion-button color="secondary" icon-start>\n                      <ion-icon name="close-circle"></ion-icon>\n                    Decline\n                  </button>\n              </ion-item-options>\n            </ion-item-sliding>\n              \n    </ion-list>\n  \n  </ion-content>\n`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\upload-list\upload-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UploadListPage);
    return UploadListPage;
}());

//# sourceMappingURL=upload-list.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		277,
		4
	],
	"../pages/otp-validation/otp-validation.module": [
		278,
		3
	],
	"../pages/register/register.module": [
		279,
		2
	],
	"../pages/upload-details/upload-details.module": [
		280,
		1
	],
	"../pages/upload-list/upload-list.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_upload_list_upload_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_upload_details_upload_details__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__["a" /* OtpValidationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_upload_list_upload_list__["a" /* UploadListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_details_upload_details__["a" /* UploadDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp-validation/otp-validation.module#OtpValidationPageModule', name: 'OtpValidationPage', segment: 'otp-validation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-details/upload-details.module#UploadDetailsPageModule', name: 'UploadDetailsPage', segment: 'upload-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-list/upload-list.module#UploadListPageModule', name: 'UploadListPage', segment: 'upload-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__["a" /* OtpValidationPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_upload_list_upload_list__["a" /* UploadListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_upload_details_upload_details__["a" /* UploadDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_upload_list_upload_list__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    /**
     * openPage
     */
    MyApp.prototype.goToHome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToUploadList = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_upload_list_upload_list__["a" /* UploadListPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\app\app.html"*/`<ion-menu [content]="content">\n        <!-- <ion-header>\n          <ion-toolbar>\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header> -->\n        <ion-content>\n          <ion-list>\n            <button ion-item (click)="goToHome()">\n              Home\n            </button>\n            <button ion-item (click)="goToUploadList()">\n              Uploads\n            </button>\n            <button ion-item (click)="openPage(eventsPage)">\n              Search\n            </button>\n            <button ion-item (click)="closeMenu()">\n              Setting\n            </button>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OtpValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpValidationPage = (function () {
    function OtpValidationPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.mobileNumber = navParams.data;
    }
    OtpValidationPage.prototype.presentToast = function (msg, duration) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: duration
        });
        toast.present();
    };
    OtpValidationPage.prototype.resendOTP = function () {
        this.presentToast("OTP has sent successfully!", 3000);
    };
    OtpValidationPage.prototype.validateOTP = function () {
        if (this.otp == "1234") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            this.presentToast("Invalid OTP!!", 10000);
        }
    };
    OtpValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpValidationPage');
    };
    OtpValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp-validation',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\otp-validation\otp-validation.html"*/`\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      OTP Validation\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <!-- <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="http://placehold.it/300x200"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row> -->\n\n  <p class="note">OTP has been sent on your mobile number <b> {{mobileNumber}}</b>, Please validate</p>\n  <div class="login-box">\n    <form (ngSubmit)="validateOTP()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Enter OTP" name="number" [(ngModel)]="otp" required></ion-input>\n            </ion-item>\n             \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Validate</button>\n          <button ion-button  full type="button" (click)="resendOTP()">Resend OTP</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\otp-validation\otp-validation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], OtpValidationPage);
    return OtpValidationPage;
}());

//# sourceMappingURL=otp-validation.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        // this.navCtrl.setRoot(HomePage);
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\home\home.html"*/`<ion-header>\n  <ion-toolbar>\n<ion-buttons left>\n  <button ion-button icon-only menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-buttons>\n<ion-title>\n  Hackathon\n</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n   <div class="square-first">\n\n    <div class="circle">\n10\n    </div>\n    <div class="desc-text">\n      Total NGO\'s\n    </div>\n   </div>\n   <div class="square">\n      \n          <div class="circle">\n      100\n          </div>\n          <div class="desc-text">\n            Total Users\n          </div>\n         </div>\n         <div class="square">\n            \n                <div class="circle">\n            20\n                </div>\n                <div class="desc-text">\n                  Today\'s Upload\n                </div>\n               </div>            \n  </ion-content>\n  `/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map