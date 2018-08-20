import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {

  @Output() sortOrderChange = new EventEmitter();

  sortOptions: {};
  selectedSortOption: string;
  sortAscending: boolean;

  constructor() { }

  ngOnInit() {
    this.sortOptions = [
      { displayName: 'name', propertyName: 'name' },
      { displayName: 'price', propertyName: 'defaultPriceInCents'},
      { displayName: 'date' , propertyName: 'createdAt' }
    ];
    this.sortAscending = true;
    this.selectedSortOption = 'name';
    this.emitSortingData();
  }

  /**
   * Toggles the Ascending/descending button and emits change.
   */
  toggleOrder() {
    this.sortAscending = !this.sortAscending;
    this.emitSortingData();
  }

  /**
   * Sets the sort option variable and triggers emits change.
   * @param event
   */
  sortOptionChange(event) {
    this.selectedSortOption = event.target.value;
    this.emitSortingData();
  }

  /**
   * Emits the changes to parent component
   */
  emitSortingData() {
    this.sortOrderChange.emit({
      selectedSortOption: this.selectedSortOption,
      sortAscending: this.sortAscending
    });
  }
}
