import { Component, OnInit } from '@angular/core';

import { faEuroSign, faDollarSign, faLiraSign  } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  currencyIcon = faEuroSign;

  quantitySelected : number = 1;
  productDetailDefaultImage = 'BANNER_IMAGE_2';

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
      route: "/legal/policy"
    }
  };

  productSliderConfig2 = {
    title : "Tornillería",
    banner : {
      image : "BANNER_IMAGE_3",
      button : {
        text: "VER CATEGORIA",
        route: "/legal/cookies"
      },
    },
    button : {
      route: "/legal/policy"
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

  constructor() { }

  ngOnInit(): void {
    if (this.productDetail) {
      switch (this.productDetail.currency) {
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
