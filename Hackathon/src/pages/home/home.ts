import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public content:any;
  constructor(public navCtrl: NavController) {
// this.navCtrl.setRoot(HomePage);
  }

}
