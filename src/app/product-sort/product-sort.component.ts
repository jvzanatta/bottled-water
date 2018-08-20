import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {

  @Output() sortOrderChange = new EventEmitter();

  selectedSortOption: string;
  sortOptions: Array<string>;
  sortAscending: boolean;

  constructor() { }

  ngOnInit() {
    this.sortOptions = ['name', 'price', 'date'];
    this.sortAscending = true;
    this.selectedSortOption = 'name';
    this.emitSortingData();
  }

  toggleOrder() {
    this.sortAscending = !this.sortAscending;
    this.emitSortingData();
  }

  sortOptionChange(event) {
    console.log(event.target.value);
    this.selectedSortOption = event.target.value;
    this.emitSortingData();
  }

  emitSortingData() {
    this.sortOrderChange.emit({
      selectedSortOption: this.selectedSortOption,
      sortAscending: this.sortAscending
    });
  }
}
