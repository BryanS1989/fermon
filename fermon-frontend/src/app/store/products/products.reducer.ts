import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import { createProduct } from "./products.actions";

export const initialProductsState : Product[] = [
  {
    id : 0,
    reference : "123456789-01",
    name : "Tornillo DIN 7985 Inox",
    shortDescription : "3mm de diametro",
    price : 0.15,
    currency : "euro",
    category : [2],
    brandId : 0,
    image : "BANNER_IMAGE_1",
    rate : 4.5
  },
  {
    id : 1,
    reference : "123456789-02",
    name : "Arandela DIN 125 Inox",
    shortDescription : "5mm de diametro",
    price : 0.25,
    currency : "euro",
    category : [1, 0],
    brandId : 0,
    image : "BANNER_IMAGE_1",
    rate : 3.5
  },
  {
    id : 2,
    reference : "123456789-03",
    name : "TUERCA DIN 985 INOX",
    shortDescription : "15mm de diametro",
    price : 25.95,
    currency : "euro",
    category : [1, 0],
    brandId : 1,
    image : "BANNER_IMAGE_1",
    rate : 5
  },
  {
    id : 3,
    reference : "123456789-04",
    name : "Varilla roscada DIN 975 Inox",
    shortDescription : "2cm de largo",
    price : 1.25,
    currency : "euro",
    category : [1, 2],
    brandId : 2,
    image : "BANNER_IMAGE_1",
    rate : 2
  },
  {
    id : 4,
    reference : "123456789-05",
    name : "Pistola 'ERGO GARDEN'",
    shortDescription : "Con tres modos de dispersión",
    price : 19.95,
    currency : "euro",
    category : [3, 0, 0],
    brandId : 7,
    image : "BANNER_IMAGE_1",
    rate : 0
  },
  {
    id : 5,
    reference : "123456789-06",
    name : "Tornillo DIN 7982 Inox",
    shortDescription : "1cm de diametro",
    price : 0.1,
    currency : "euro",
    category : [2],
    brandId : 9,
    image : "BANNER_IMAGE_1",
    rate : 1
  },
];

const _productsReducer = createReducer(
  initialProductsState,
  on (createProduct, (state, {product}) =>
    [
      ...state,
      product
    ]
  )
);

export function productsReducer (state : any, action : any) {
  return _productsReducer(state, action);
}
