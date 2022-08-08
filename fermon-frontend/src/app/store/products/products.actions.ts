import { createAction, props, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const createProduct = createAction (
  '[PRODUCTS] Create product',
  props<{
    product : Product
  }>()
);
