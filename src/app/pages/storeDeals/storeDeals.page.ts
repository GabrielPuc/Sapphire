import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController} from '@ionic/angular';
import { GameDetailModalPage } from '../gameDetailModal/gameDetailModal.page';

@Component({
  selector: 'app-storeDeals',
  templateUrl: 'storeDeals.page.html',
  styleUrls: ['storeDeals.page.scss']
})
export class StoreDealsPage implements OnInit {

  private deals: any = [];
  private storeName: string;
  private storeID: string;
  private numberPage = 0;
  constructor(
    private router: ActivatedRoute,
    private http: HttpClient,
    private modalController: ModalController) {}

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
      this.deals.push.apply(this.deals, response);
      resolve(true);
    });
    });
  }

  searchDetail(deal) {
    const treatedTitle = deal.title.replace(/\!|\?|\:/g, '').replace(' - ', ' ')
        .replace(/ |_/g, '-'); // <-- REPLACE THIS WITH A PROPER STRING REPLACE METHOD
    this.http.get('https://api.rawg.io/api/games/' + treatedTitle).subscribe((response) => {
    this.presentModal(deal, response);
    }, (error) => { alert('No data available'); });
  }

  loadData(event) {
    setTimeout(() => {
      this.numberPage += 1;
      this.getStoreDeals().then(( () => {
        event.target.complete();
      }));

      // Implement condition to stop infinite scrolling
      // if (CONDITION) {
      //  event.target.disabled = true;
      // }
    }, 500);
  }

  async presentModal(deal, detail) {
    const modal = await this.modalController.create({
      component: GameDetailModalPage,
      componentProps: {
        game: deal,
        gameDetail: detail
      }
    });
    return await modal.present();
  }



}
