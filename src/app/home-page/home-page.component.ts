import { Component, OnInit } from '@angular/core';
import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  storeData;
  showAddToCartButton: boolean;
  enableSorting: boolean;

  constructor(private _store: StoreService) { }

  ngOnInit() {
    this.showAddToCartButton = true;
    this.enableSorting = true;

    this._store.getStore()
      .subscribe(storeData => this.storeData = storeData);
  }

}
