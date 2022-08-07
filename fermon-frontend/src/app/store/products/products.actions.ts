import { createAction, props } from "@ngrx/store";

export const createProduct = createAction (
  '[PRODUCTS] Create product',
  props<{
    id : number,
    name : string,
    shortDescription : string,
    price : number,
    currency : string,
    category : number[],
    brandId : number
  }>()
);
