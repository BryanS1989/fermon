import { createSelector } from '@ngrx/store';
import { AppState } from "src/app/app.reducer";
import { Product } from "src/app/models/product.model";

export const selectProducts = (state: AppState) => state.products;

export const getProductById = (productId : number) => createSelector(
  selectProducts,
  (products: Product[]) => {
    return products.find(product => {
      return product.id === productId;
    });
  }
);
