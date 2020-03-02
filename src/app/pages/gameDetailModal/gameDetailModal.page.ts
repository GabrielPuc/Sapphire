import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gameDetailModal',
  templateUrl: 'gameDetailModal.page.html',
  styleUrls: ['gameDetailModal.page.scss']
})
export class GameDetailModal {

  private gameDetail:any;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController) {
      this.gameDetail = navParams.get('gameDetail');
      //console.log(navParams.get('gameDetail'));
    }
  
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': true
      });
    }

}
