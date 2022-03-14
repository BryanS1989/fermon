import { Component, OnInit, Input } from '@angular/core';

import { faStar as fasStar, faStarHalfStroke, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.scss']
})
export class RateProductComponent implements OnInit {

  @Input() rate : number = 0;
  @Input() editable : boolean = false;

  starsConfig : any[] = [];

  constructor() { }

  ngOnInit(): void {
    var integerRate : number = Math.floor(this.rate);
    var decimalRate : boolean = ( this.rate % 1 ) > 0;
    var starRate : any[] = [];

    for (let index = 0; index < 5; index++) {
      var icon : IconDefinition = farStar;

      if (index < integerRate) {
        icon = fasStar ;
      } else if ((index === integerRate) && decimalRate) {
        icon = faStarHalfStroke;
      }

      starRate.push({
        icon : icon
      });
    }

    this.starsConfig = starRate;
  }

}
