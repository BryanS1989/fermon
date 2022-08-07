import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-prices',
  templateUrl: './product-prices.component.html',
  styleUrls: ['./product-prices.component.scss']
})
export class ProductPricesComponent implements OnInit {

  @Output() selectedPriceRange : EventEmitter<any[]> = new EventEmitter();

  readonly MINPRICE : any = 0;
  readonly MAXPRICE : any = 100;

  range : any = {
    minPrice : this.MINPRICE,
    maxPrice : this.MAXPRICE
  };

  priceRange = new FormGroup({
    minPrice: new FormControl(this.MINPRICE, [Validators.min(this.MINPRICE), Validators.max(this.MAXPRICE)]),
    priceRangeSelector: new FormControl('', [Validators.min(this.MINPRICE), Validators.max(this.MAXPRICE)]),
    maxPrice: new FormControl(this.MAXPRICE, [Validators.min(this.MINPRICE), Validators.max(this.MAXPRICE)]),
  });

  constructor() { }

  ngOnInit(): void {

    this.getMinPrice?.valueChanges.subscribe(min => {
      if (min < this.MINPRICE) {
        min = this.MINPRICE;
      } else if (min > this.range.maxPrice) {
        this.priceRange.get('minPrice')?.setValue(this.range.maxPrice);
      }

      this.range.minPrice = min;
      this.selectPriceRange();
    });

    this.getPriceRangeSelector?.valueChanges.subscribe(selectedRange => {
      if (selectedRange > this.MAXPRICE) {
        selectedRange = this.MAXPRICE;
      } else if (selectedRange > this.range.maxPrice) {
        this.priceRange.get('priceRangeSelector')?.setValue(this.range.maxPrice);
      } else if (selectedRange < this.range.minPrice) {
        this.priceRange.get('priceRangeSelector')?.setValue(this.range.minPrice);
      }
      this.range.maxPrice = selectedRange;

      this.priceRange.get('maxPrice')?.setValue(selectedRange);
    });

    this.getMaxPrice?.valueChanges.subscribe(max => {
      if (max > this.MAXPRICE) {
        max = this.MAXPRICE;
      } else if (max < this.range.minPrice) {
        this.priceRange.get('maxPrice')?.setValue(this.range.minPrice);
      }

      this.range.maxPrice = max;
      this.selectPriceRange();
    });
  }

  get getMinPrice() {
    return this.priceRange.get('minPrice');
  }

  get getMaxPrice() {
    return this.priceRange.get('maxPrice');
  }

  get getPriceRangeSelector() {
    return this.priceRange.get('priceRangeSelector');
  }

  selectPriceRange() : void {
    this.selectedPriceRange.emit(this.range);
  }
}
