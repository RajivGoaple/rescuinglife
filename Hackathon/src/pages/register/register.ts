import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OtpValidationPage } from '../otp-validation/otp-validation';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
public register(){
  this.navCtrl.push(OtpValidationPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
