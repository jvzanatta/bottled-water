import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { StoreService } from '@services/store.service';

import { Product } from '@classes/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productList: Array<Product>;
  showAddToCartButton: boolean;
  enableSorting: boolean;

  constructor(
    private _store: StoreService,
    public activeModal: NgbActiveModal
  ) {
  }

  ngOnInit() {
    this.showAddToCartButton = false;
    this.enableSorting = false;

    this._store.getCartDataSource().subscribe(productList => {
      this.productList = productList;
    });
  }

}
