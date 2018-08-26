import { Input, Component, OnInit } from '@angular/core';

import { StoreService } from '@services/store.service';

@Component({
  selector: 'app-product-cart-button',
  templateUrl: './product-cart-button.component.html',
  styleUrls: ['./product-cart-button.component.css']
})
export class ProductCartButtonComponent implements OnInit {

  @Input() product;

  constructor(private _store: StoreService) { }

  ngOnInit() {
  }

  addToCart() {
    this._store.updateStore(this.product);
  }

}
