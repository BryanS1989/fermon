import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { createProduct } from "./products.actions";

export const initialProductsState : Product[] = [];

const _productsReducer = createReducer(
  initialProductsState,
  on(createProduct, (state, {id, name, shortDescription, price, currency, category, brandId}) => [...state, new Product(id, name, shortDescription, price, currency, category, brandId)])
);

export function productsReducer (state : any, action : any) {
  return _productsReducer(state, action);
}
