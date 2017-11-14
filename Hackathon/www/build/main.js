webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(101);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_validation_otp_validation__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_User__ = __webpack_require__(248);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		275,
		3
	],
	"../pages/otp-validation/otp-validation.module": [
		277,
		2
	],
	"../pages/register/register.module": [
		276,
		1
	],
	"../pages/upload-list/upload-list.module": [
		278,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
        this.navCtrl.setRoot(HomePage_1);
    }
    HomePage_1 = HomePage;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\home\home.html"*/`<ion-header>\n  <ion-toolbar>\n<ion-buttons left>\n  <button ion-button icon-only menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n</ion-buttons>\n<ion-title>\n  Hackathon\n</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n   <div class="square-first">\n\n    <div class="circle">\n10\n    </div>\n    <div class="desc-text">\n      Total NGO\'s\n    </div>\n   </div>\n   <div class="square">\n      \n          <div class="circle">\n      100\n          </div>\n          <div class="desc-text">\n            Total Users\n          </div>\n         </div>\n         <div class="square">\n            \n                <div class="circle">\n            20\n                </div>\n                <div class="desc-text">\n                  Today\'s Upload\n                </div>\n               </div>            \n  </ion-content>\n  `/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__ = __webpack_require__(50);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__["a" /* OtpValidationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp-validation/otp-validation.module#OtpValidationPageModule', name: 'OtpValidationPage', segment: 'otp-validation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-list/upload-list.module#UploadListPageModule', name: 'UploadListPage', segment: 'upload-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_9__pages_otp_validation_otp_validation__["a" /* OtpValidationPage */]
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

/***/ 248:
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(154);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
    MyApp.prototype.openPage = function (par) {
        alert("working");
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\app\app.html"*/`<ion-menu [content]="content">\n        <!-- <ion-header>\n          <ion-toolbar>\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header> -->\n        <ion-content>\n          <ion-list>\n            <button ion-item (click)="openPage(homePage)">\n              Home\n            </button>\n            <button ion-item (click)="openPage(uploadList)">\n              Upload\n            </button>\n            <button ion-item (click)="openPage(eventsPage)">\n              Search\n            </button>\n            <button ion-item (click)="closeMenu()">\n              Setting\n            </button>\n          </ion-list>\n        </ion-content>\n      </ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n`/*ion-inline-end:"C:\Users\VBHARAMB\Desktop\HacktonApp Repo\rescuinglife\Hackathon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(154);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], OtpValidationPage);
    return OtpValidationPage;
}());

//# sourceMappingURL=otp-validation.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map