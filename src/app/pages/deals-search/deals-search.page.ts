import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CheapsharkProvider } from 'src/app/providers/cheapshark';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { STORES_DATA } from 'src/app/constants/stores';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GameDetailModalPage } from '../gameDetailModal/gameDetailModal.page';
import { HttpClient } from '@angular/common/http';
import { FilterSearch } from 'src/app/components/filter-search';
import {RainbowStatusService} from '../../providers/rainbow-status-service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-deals-search',
  templateUrl: 'deals-search.page.html',
  styleUrls: ['deals-search.page.scss']
})
export class DealsSearchPage {
 
  constructor(
    private loadingController: LoadingController,
    private cheapshark: CheapsharkProvider,
    private iab: InAppBrowser,
    private popOver: PopoverController,
    private rainbowService: RainbowStatusService,
    private loading: LoadingService,
    private http: HttpClient,
    private modalController: ModalController) { }

  private searchTerm = '';
  private numberPage = 0;
  private games = [];
  private lastPageReached = false;
  private scrollContent: any;
  private deepScroll = false;
  private fail = false;
  private filters = {
    onSale: "1",
    sortBy: "Deal Rating"
  }
  private KEY_WORLD = 'sapphire';

  private scrollDepthTriggered = false;

  isKeyWord() {
    return this.searchTerm.toLowerCase() === this.KEY_WORLD.toLowerCase();
  }

  onSearch() {
    this.resetList();
    if (this.searchTerm === '') {
      this.games = [];
    } else if (this.isKeyWord()) {
      this.fail = true;
    } else {
      //this.loading.present();
      this.getGames();
      //this.loading.dismiss();
    }
  }

  resetList() {
    this.numberPage = 0;
    this.games = [];
    this.fail = false;
  }

  getGames(): void {
    this.cheapshark.getStoreDeals(this.searchTerm, this.numberPage, this.filters)
      .subscribe((response) => {
        this.lastPageReached = response === [];
        this.games.push.apply(this.games, response);
        this.numberPage += 1;
        console.log(response);
        this.fail = this.games.length < 1;
        //this.loading.dismissFix();
      }, (error) => {
        //this.loading.dismissFix();
        alert('No data available');
        this.fail = true;
      });
  }

  loadData(event) {
    setTimeout(() => {
      this.getGames();
      event.target.complete();
      event.target.disabled = this.lastPageReached;
    }, 500);
  }

  getScrollPosition() {

  }

  scrollToTop() {
    if (this.scrollContent == null) {
      this.scrollContent = document.getElementById('listScroll');
    }
    this.scrollContent.scrollToTop();
  }
  async logScrolling($event) {
    if (this.scrollDepthTriggered) {
      return;
    }

    if ($event.target.localName !== 'ion-content') {
      return;
    }

    const currentScrollDepth = $event.detail.scrollTop;
    this.deepScroll = currentScrollDepth > 200;
    // console.log({currentScrollDepth});
  }

  async presentFilterPopover(event) {
    console.log("please")
    const filterPopover = await this.popOver.create({
      component: FilterSearch,
      event: event,
      translucent: true,
      mode: "ios"
    });
    filterPopover.onDidDismiss()
      .then((filtersSelected) => {
        this.applyFilters(filtersSelected);
      });
    return await filterPopover.present();
  }

  applyFilters(filters) {
    console.log(filters.data);
    console.log(this.filters);
    if (filters.data !== undefined) {
      if (this.searchTerm !== '') {
        this.filters = filters.data;
        this.resetList();
        this.getGames();
      }
    }
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

  openDealURL(dealURL) {
    const browser = this.iab.create('https://www.cheapshark.com/redirect?dealID=' + dealURL, '_system');
    browser.show();
  }

  getStoreName(id) {
    return STORES_DATA.find(i => i.storeID === id).storeName;
  }

  getDiscount(saving) {
    return Number(saving).toFixed();
  }

  onClear() {
    this.resetList();
  }

}
