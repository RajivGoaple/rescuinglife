import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  registerCredentials = { username: '', password: '' };
 
  constructor(public navCtrl: NavController) {

  }
  public login() {
    if(this.registerCredentials.username=="admin" && this.registerCredentials.password=="admin")
    {
     this.navCtrl.push(HomePage);
    } 
    else{ 
      alert("Incorrect Username or Password");
    }
  }

 public createAccount(){
  this.navCtrl.push(RegisterPage);
 }

}
