import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CheapsharkProvider {
  constructor(public http: HttpClient) {
  }

  getStoreDeals(gameTitle,pageNumber,filters){
    return this.http.get('https://www.cheapshark.com/api/1.0/deals?title='+gameTitle+'&pageSize=20&pageNumber='+pageNumber+'&onSale='+filters.onSale+'&sortBy='+filters.sortBy);
  }

}