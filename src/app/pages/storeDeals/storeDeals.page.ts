import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { GameDetailModalPage } from '../gameDetailModal/gameDetailModal.page';
import { LoadingService } from 'src/app/services/loading.service'

@Component({
  selector: 'app-storeDeals',
  templateUrl: 'storeDeals.page.html',
  styleUrls: ['storeDeals.page.scss']
})
export class StoreDealsPage implements OnInit {

  public deals: any = [];
  public storeName: string;
  private storeID: string;
  private numberPage = 0;
  private lastPageReached = false;
  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private modalController: ModalController,
    private loading: LoadingService) { }

  ngOnInit() {
    const sub = this.router.params.subscribe(params => {
      this.storeID = params.storeID;
      this.storeName = params.storeName;
      this.getStoreDeals();
    });
  }

  getStoreDeals() {
    return new Promise(resolve => {
      this.http.get('https://www.cheapshark.com/api/1.0/deals?storeID=' + this.storeID + '&pageSize=20&pageNumber=' + this.numberPage +
        '&onSale=1&sortBy=Deal Rating').subscribe((response) => {
          this.lastPageReached = response === [];
          this.deals.push.apply(this.deals, response);
          resolve(true);
        });
    });
  }

  searchDetail(deal) {
    this.loading.present();
    const treatedTitle = deal.title.replace(/\!|\?|\:/g, '').replace(' - ', ' ')
      .replace(/ |_/g, '-'); // <-- REPLACE THIS WITH A PROPER STRING REPLACE METHOD
    let detail;
    this.http.get('https://api.rawg.io/api/games/' + treatedTitle).subscribe((response) => {
      detail = response;
      if (detail.metacritic === null || detail.metacritic < 1) {
        const score = deal.metacriticScore;
        score > 0 ? deal.metacritic = score : detail.metacritic = 'unknown';
      }
      this.loading.dismiss();
    }, (error) => {
      let score = deal.metacriticScore;
      if (score <= 0) {
        score = 'tbd';
      }
      detail = {
        background_image: deal.thumb, metacritic: score,
        description: 'Please, go to the Deal page if you want to know more details about this game.',
        name_original: deal.title
      };
      this.presentModal(detail, deal);
      this.loading.dismiss();
    }, () => this.presentModal(detail, deal));
  }

  loadData(event) {
    setTimeout(() => {
      this.numberPage += 1;
      this.getStoreDeals().then((() => {
        event.target.complete();
        event.target.disabled = this.lastPageReached;
      }));
    }, 500);
  }

  async presentModal(detail, deal) {
    const modal = await this.modalController.create({
      component: GameDetailModalPage,
      componentProps: {
        gameDetail: detail,
        deal
      }
    });
    return await modal.present();
  }



}
