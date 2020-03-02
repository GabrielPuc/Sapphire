import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheapsharkProvider {
  constructor(public http: HttpClient) {
  }

  getStoreDeals(gameTitle,pageNumber){
    return this.http.get('https://www.cheapshark.com/api/1.0/deals?title='+gameTitle+'&pageSize=20&pageNumber='+pageNumber+'&onSale=1&sortBy=Deal Rating');
  }

}