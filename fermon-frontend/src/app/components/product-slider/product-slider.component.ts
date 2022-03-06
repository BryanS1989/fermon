import { Component, OnInit, Input } from '@angular/core';

import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input() products : any;
  @Input() productSliderConfig : any;

  moreIcon = faPlus;

  constructor() { }

  ngOnInit(): void {

  }

}
