import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import { Product } from "src/app/models/product.model";
import * as productsSelector from "src/app/store/products/products.selectors";

import { faEuroSign, faDollarSign, faLiraSign  } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() productId : number = 0;

  currencyIcon = faEuroSign;

  quantitySelected : number = 1;
  productDetailDefaultImage = 'BANNER_IMAGE_2';

  product : Product | undefined ;

  productDetail = {
    id : 1,
    name : "Arandela DIN 125 Inox",
    shortDescription : "5mm de diametro",
    price : 0.25,
    currency : "euro",
    image : "BANNER_IMAGE_1",
    reference :  "123678351-65",
    rate : 3.5
  };

  productSliderConfig : any = {
    title : "También te recomendamos...",
    button : {
      route: "/products"
    }
  };

  productSliderConfig2 = {
    title : "Tornillería",
    banner : {
      image : "BANNER_IMAGE_3",
      button : {
        text: "VER CATEGORIA",
        route: "/products/category/2"
      },
    },
    button : {
      route: "/products"
    }
  };

  products : any = [
    {
      id : 0,
      name : "Tornillo DIN 7985 Inox",
      shortDescription : "3mm de diametro",
      price : "0.5",
      currency : "euro"
    },
    {
      id : 1,
      name : "Arandela DIN 125 Inox",
      shortDescription : "5mm de diametro",
      price : "0.25",
      currency : "euro"
    },
    {
      id : 2,
      name : "TUERCA DIN 985 INOX",
      shortDescription : "15mm de diametro",
      price : "0.95",
      currency : "euro"
    },
    {
      id : 3,
      name : "Varilla roscada DIN 975 Inox",
      shortDescription : "2cm de largo",
      price : "1.25",
      currency : "euro"
    },
    {
      id : 4,
      name : "Pistola 'ERGO GARDEN'",
      shortDescription : "Con tres modos de dispersión",
      price : "19.95",
      currency : "euro"
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.productId = + this.route.snapshot.paramMap.get('productId')!;
        this.store.select(productsSelector.getProductById(this.productId))
                  .subscribe((product) => {
                    this.product = product;
                  });
      }
    });

  }

  ngOnInit(): void {
    if (this.product) {
      switch (this.product.currency) {
        case 'euro':
          this.currencyIcon = faEuroSign;
          break;

        case 'pounds':
          this.currencyIcon = faLiraSign;
          break;

        case 'dollar':
          this.currencyIcon = faDollarSign;
          break;

        default:
          this.currencyIcon = faEuroSign;
          break;
      }
    }
  }

  getSelectedQuantity(selectedQuantity : any) : void {
    this.quantitySelected = selectedQuantity;
  }

}
