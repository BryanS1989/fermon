import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faFilter, faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
  filterEraseIcon = faFilterCircleXmark;

  filters : string[] = [
    "CATEGORIAS",
    "MARCAS",
    "PRECIO"
  ];

  showFilters : boolean[] = [];

  selectedCategories : any[] = [];
  selectedBrand : any = {};
  selectedPrice : any = {};

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

    this.selectedCategories = selectedCategory;

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

    this.selectedBrand = brand;

    if (!brand) {
      this.filteredProducts.emit(this.products);
    }

    let result = this.products.filter((product : any) => {
        return product.brandId === brand.id;
    });

    this.filteredProducts.emit(result);
  }

  filterPrice(priceRange : any) {
    console.log('[ProductFilterComponent] filterPrice([' + priceRange.minPrice + ', ' + priceRange.maxPrice + '])');

    this.selectedPrice = priceRange;

    if (!priceRange) {
      this.filteredProducts.emit(this.products);
    }

    let result = this.products.filter((product : any) => {
        if ( priceRange.maxPrice !== 1000 && priceRange.minPrice !== 0 ) {

          return ( product.price <= priceRange.maxPrice ) && ( product.price >= priceRange.minPrice );

        } else if ( priceRange.maxPrice !== 1000 ) {

          return ( product.price <= priceRange.maxPrice );

        } else if ( priceRange.minPrice !== 0 ) {

          return ( product.price >= priceRange.minPrice );

        } else {

          return false;

        }
    });

    this.filteredProducts.emit(result);
  }

  toggleFilters(filterIndex : number) : void {
    if (filterIndex === -1) {
      this.selectedCategories = [];
      this.selectedBrand = {};
      this.filteredProducts.emit(this.products);
    } else {
      this.showFilters[filterIndex] = !this.showFilters[filterIndex];
    }
  }

}
