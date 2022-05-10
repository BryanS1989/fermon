import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.scss']
})
export class ProductBrandsComponent implements OnInit {

  @Output() selectedBrand : EventEmitter<any[]> = new EventEmitter();

  iconToShow = faCaretRight;

  brands : any[] = [
    {
      id: 0,
      title : "KARCHER"
    },
    {
      id: 1,
      title : "BOSCH"
    },
    {
      id: 2,
      title : "VIRUTEX"
    },
    {
      id: 3,
      title : "KNIPEX"
    },
    {
      id: 4,
      title : "CLABER"
    },
    {
      id: 5,
      title : "MAKITA"
    },
    {
      id: 6,
      title : "LOCTITE"
    },
    {
      id: 7,
      title : "OLIVE"
    },
    {
      id: 8,
      title : "FIMER"
    },
    {
      id: 9,
      title : "IZAR"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectBrand(brand : any) : void {
    console.log("selectedBrand id:" + brand.id + " title: " + brand.title);
    this.selectedBrand.emit(brand);
  }
}
