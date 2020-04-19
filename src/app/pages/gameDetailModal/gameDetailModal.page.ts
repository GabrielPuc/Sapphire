import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { STORES_DATA } from 'src/app/constants/stores';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

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
    private modalController: ModalController,
    private socialSharing: SocialSharing) {
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

  getStoreImg(id) {
    return "https://www.cheapshark.com" + STORES_DATA.find(i => i.storeID === id).images.banner;
  }

  openDealURL(dealURL) {
    const browser = this.iab.create('https://www.cheapshark.com/redirect?dealID=' + dealURL, '_system');
    browser.show();
  }

  shareDealTwitter(dealId){
    this.socialSharing.shareViaTwitter("Wow i found " + this.gameDetail.name_original +" at " + this.deal.salePrice + " USD, thanks Sapphire!!",null,'https://www.cheapshark.com/redirect?dealID=' + dealId).then(() => {
      console.log("Ok")
    }).catch(() => {
      console.log("Not Ok")
    });
  }

  shareDealFB(dealId){
    this.socialSharing.shareViaFacebook("Wow i found " + this.gameDetail.name_original +" at " + this.deal.salePrice + " USD, thanks Sapphire!!",null,'https://www.cheapshark.com/redirect?dealID=' + dealId).then(() => {
      console.log("Ok")
    }).catch(() => {
      console.log("Not Ok")
    });
  }

  shareDealWA(dealId){
    this.socialSharing.shareViaWhatsApp("Wow i found " + this.gameDetail.name_original +" at " + this.deal.salePrice + " USD, thanks Sapphire!!",null,'https://www.cheapshark.com/redirect?dealID=' + dealId).then(() => {
      console.log("Ok")
    }).catch(() => {
      console.log("Not Ok")
    });
  }

  shareDealGeneral(dealId){
    this.socialSharing.share("Wow i found " + this.gameDetail.name_original +" at " + this.deal.salePrice + " USD, thanks Sapphire!!",null,'https://www.cheapshark.com/redirect?dealID=' + dealId).then(() => {
      console.log("Ok")
    }).catch(() => {
      console.log("Not Ok")
    });
  }

  private scrollDepthTriggered = false;
  private deepScroll = 0;
  async logScrolling($event) {
    if (this.scrollDepthTriggered) {
      return;
    }

    if ($event.target.localName !== 'ion-content') {
      return;
    }

    const currentScrollDepth = $event.detail.scrollTop;
    if(currentScrollDepth > 200){
      this.deepScroll = 2
    }else if(currentScrollDepth > 100 && currentScrollDepth <= 199){
      this.deepScroll = 1
    }else{
      this.deepScroll = 0
    }
    console.log({currentScrollDepth});
  }

}
