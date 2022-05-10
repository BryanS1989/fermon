import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faFilter } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input() products : any[] = [];
  @Input() preselectedCategory : any = null;
  @Output() filteredProducts : EventEmitter<any[]> = new EventEmitter();

  filterIcon = faFilter;

  filters : string[] = [
    "CATEGORIAS",
    "MARCAS",
    "PRECIO"
  ];

  showFilters : boolean[] = [];

  selectedCategoryTitles : any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showFilters[0] = false;

    this.filters.map((filter) => {
      this.showFilters.push(false);
    });
    this.filterCategory(this.preselectedCategory);
  }

  filterCategory(selectedCategory : any[]) {
    console.log('[ProductFilterComponent] filterCategory([' + selectedCategory + '])');

    this.selectedCategoryTitles = selectedCategory;

    if (selectedCategory.length === 0) {
      this.filteredProducts.emit(this.products);
    }

    let result = this.products.filter((product : any) => {
      return selectedCategory.every((categorySelected : any, index : number) => {
        return product.category[index] === categorySelected.id;
      });
    });

    this.filteredProducts.emit(result);
  }

  filterBrand(brand : any) {
    console.log('[ProductFilterComponent] filterBrand([' + brand.title + '])');

    if (!brand) {
      this.filteredProducts.emit(this.products);
    }

    let result = this.products.filter((product : any) => {
        return product.brandId === brand.id;
    });

    this.filteredProducts.emit(result);
  }

  toggleFilters(filterIndex : number) : void {
    this.showFilters[filterIndex] = !this.showFilters[filterIndex];
  }

}
