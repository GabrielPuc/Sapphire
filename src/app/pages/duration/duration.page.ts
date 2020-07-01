import { Component } from '@angular/core';
import { HowLongToBeatService, HowLongToBeatEntry } from '../../providers/howlongtobeat';

@Component({
  selector: 'app-duration',
  templateUrl: 'duration.page.html',
  styleUrls: ['duration.page.scss']
})
export class DurationPage {

  public hltbService = new HowLongToBeatService();
  public games = [];
  public searchTerm = '';

  constructor() {
    
  }

  getGamesDurations(){
    this.hltbService.search(this.searchTerm).then(result => {
      this.games = result;
      console.log(result)
    }, err => {
      this.games = [];
      console.log(err);
    });
  }

  onSearch() {
    this.resetList();
    if (this.searchTerm === '') {
      this.games = [];
    } else {
      this.getGamesDurations();
    }
  }

  resetList() {
    this.games = [];
  }

  onClear() {
    this.resetList();
  }
}
