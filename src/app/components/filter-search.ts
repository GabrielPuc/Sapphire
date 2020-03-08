import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'filter-search',
    templateUrl: 'filter-search.html',
    styleUrls: ['filter-search.scss']
})

export class FilterSearch {

    private onSale = "1"
    private sortBy = "Deal Rating"

    constructor(private popOver: PopoverController) { };

    dismiss() {
        let filters = {
            onSale: this.onSale,
            sortBy: this.sortBy
        }
        this.popOver.dismiss(filters)
    }
}  