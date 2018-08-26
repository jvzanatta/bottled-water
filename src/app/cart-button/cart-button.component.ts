import { Component, OnInit } from '@angular/core';

import { StoreService } from '@services/store.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {

  productsOnCart: number;

  constructor(
    private _store: StoreService,
    private modalService: NgbModal
  ) {
    this.productsOnCart = 0;
  }

  ngOnInit() {
    this._store.getCartDataSource().subscribe(products => {
      this.productsOnCart = products.length;
    });
  }

  goToCart() {
    const modalRef = this.modalService.open(CartComponent, { size: 'lg', centered: 'true' });
  }
}
