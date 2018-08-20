import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList;
  sortOption: string;
  sortAscending: boolean;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Sets the parameters to feed the sorting pipe.
   * @param sort
   */
  onSortOrderChange(sort) {
    this.sortOption = sort.selectedSortOption;
    this.sortAscending = sort.sortAscending;
  }


}
