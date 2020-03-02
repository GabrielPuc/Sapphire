import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CheapsharkProvider } from 'src/app/providers/cheapshark';
import { STORES_DATA } from 'src/app/constants/stores';

@Component({
  selector: 'app-deals-search',
  templateUrl: 'deals-search.page.html',
  styleUrls: ['deals-search.page.scss']
})
export class DealsSearchPage {

  constructor(
    private loadingController: LoadingController,
    private cheapshark: CheapsharkProvider) {}
  private searchTerm = '';
  private numberPage = 0;
  private games = [];
  private loader: any;
  private lastPageReached = false;
  private scrollContent: any;
  private deepScroll = false;

  private scrollDepthTriggered = false;

    onSearch() {
    this.resetList();
    if (this.searchTerm === '') {
      this.games = [];
    } else {
      this.showLoader();
      this.getGames();
      this.hideLoader();
    }
  }

    resetList() {
     this.numberPage = 0;
     this.games = [];
    }

  getGames(): void {
    this.cheapshark.getStoreDeals(this.searchTerm, this.numberPage)
    .subscribe((response) => {
      this.lastPageReached = response === [];
      this.games.push.apply(this.games, response);
      this.numberPage += 1;
      console.log(response);
    }, (error) => {
      alert('No data available');
    });
  }

  loadData(event) {
    setTimeout(() => {
      this.getGames();
      event.target.complete();
      event.target.disabled = this.lastPageReached;
    }, 500);
  }

  showLoader() {
    this.loader = this.loadingController.create({
      message: 'Looking for deals'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
      });
    });
  }

  hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
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

  getStoreName(id) {
    return STORES_DATA.find(i => i.storeID === id).storeName;
  }

  onClear() {
      this.games = [];
  }

}
