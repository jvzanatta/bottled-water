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

  onSortOrderChange(sort) {
    this.sortProducts(sort.selectedSortOption, sort.sortAscending);
  }

  sortProducts(sortOption: string, sortAscending: boolean) {
    this.sortOption = sortOption;
    this.sortAscending = sortAscending;
/*     this.productList.sort(this.compareProducts);
 */  }

/*   compareProducts(a: Product, b: Product) {
    function compare(a, b) {
      if (a is less than b by some ordering criterion) {
        return -1;
      }
      if (a is greater than b by the ordering criterion) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
  } */

}
