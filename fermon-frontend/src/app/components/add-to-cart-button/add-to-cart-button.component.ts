import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {

  @Input() quantitySelected : number = 0;
  @Input() productId : number = 0;

  addToCartButton = "Añadir al carrito";

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  addToCartProduct () : void {
    console.log("Añadido " + this.quantitySelected + " del producto " + this.productId + " al carrito");
    this._location.back();
  }
}
