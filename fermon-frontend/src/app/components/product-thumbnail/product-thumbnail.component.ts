import { Component, OnInit, Input } from '@angular/core';

import { faEuroSign, faDollarSign, faLiraSign  } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product : any;

  currencyIcon : any = null;

  constructor() { }

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

}
