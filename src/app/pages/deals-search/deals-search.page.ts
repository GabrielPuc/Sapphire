import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CheapsharkProvider } from 'src/app/providers/cheapshark';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { STORES_DATA } from 'src/app/constants/stores';
import { PopoverController } from '@ionic/angular';
import { FilterSearch } from 'src/app/components/filter-search'
import { LoadingService } from 'src/app/services/loading.service'

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
    private loading: LoadingService) { }

  private searchTerm = '';
  private numberPage = 0;
  private games = [];
  private loader: any;
  private lastPageReached = false;
  private scrollContent: any;
  private deepScroll = false;
  private fail = false;
  private filters = {
    onSale: "1",
    sortBy: "Deal Rating"
  }

  private scrollDepthTriggered = false;

  onSearch() {
    this.resetList();
    if (this.searchTerm === '') {
      this.games = [];
    } else {
      this.loading.present();
      this.getGames();
      this.loading.dismiss();
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
        this.loading.dismiss();
      }, (error) => {
        alert('No data available');
        this.fail = true;
      });
    this.loading.dismiss();
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
