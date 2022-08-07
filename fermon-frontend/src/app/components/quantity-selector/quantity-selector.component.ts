import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {

  @Output() quantitySelectedEvent :  EventEmitter<number> = new EventEmitter<number>();

  quantitySelectorValues = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    15,
    20
  ];
  quantitySelector = new UntypedFormControl(1);

  constructor() { }

  ngOnInit(): void {
  }

  emitSelectedQuantity() : void {
    this.quantitySelectedEvent.emit(this.quantitySelector.value);
  }


}
