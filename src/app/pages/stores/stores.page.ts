import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores',
  templateUrl: 'stores.page.html',
  styleUrls: ['stores.page.scss']
})
export class StoresPage {

  private stores:any = [];
  constructor(
    private http: HttpClient,
    private router: Router) {
    this.getStores();
  }

  getStores(){
    this.http.get('https://www.cheapshark.com/api/1.0/stores').subscribe((response) => {
    this.stores = response;
    });
  }
  
  LaunchStoreDeals(storeID,storeName){
    this.router.navigate(['/stores',storeID,storeName]);
  }

}
