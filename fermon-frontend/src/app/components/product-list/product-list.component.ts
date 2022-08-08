import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { Product } from "src/app/models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsTitle : string = 'Nuestros productos';

  products : Product[] = [];

  filteredProducts : any[] = [];
  preselectedCategory : any[] = [];

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('products').subscribe( products => this.products = products );

    const categoryIdPreSelected = this.route.snapshot.paramMap.get('categoryId')!;

    if (categoryIdPreSelected !== null) {
      this.preselectedCategory.push({
        id : parseInt(categoryIdPreSelected),
        title : ""
      });
    }
  }

  setFilteredProducts(filteredResult : any[]) : void {
    this.filteredProducts = filteredResult;
  }

}
