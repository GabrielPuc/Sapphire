import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-gameDetailModal',
  templateUrl: 'gameDetailModal.page.html',
  styleUrls: ['gameDetailModal.page.scss']
})
export class GameDetailModalPage {
  private gameDetail: any;
  private deal: any;
  constructor(
      private iab: InAppBrowser,
      private navParams: NavParams,
      private modalController: ModalController) {
    this.gameDetail = navParams.get('gameDetail');
    // console.log(this.gameDetail);
    // console.log(navParams.get('gameDetail'));
    }
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        dismissed: true
      });
    }

  getDiscount(saving) {
    return Number(saving).toFixed();
  }
  openDealURL(dealURL) {
    const browser = this.iab.create('https://www.cheapshark.com/redirect?dealID=' + dealURL, '_system');
    browser.show();
  }
}
