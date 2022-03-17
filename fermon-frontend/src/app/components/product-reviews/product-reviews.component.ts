import { Component, OnInit, Input } from '@angular/core';

import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {

  @Input() productId : number = 0;

  moreIcon = faPlus;

  productReviewTitle = "Opiniones";
  showLoadButton : boolean = false;
  quantityOfReviews = 3;
  currentIndex = 0;

  productReviewsToShow : any[] = [];

  productReviews : any[] = [
    {
      user : "Javier1",
      rate : 4.5,
      date : "2022-01-30",
      text : "Está mu bonito"
    },
    {
      user : "Bryan2",
      rate : 4.0,
      date : "2022-02-22",
      text : "Supongo que lo volveré a comprar, que güeno"
    },
    {
      user : "Davidesen3",
      rate : 1.75,
      date : "2020-04-15",
      text : "No sé muy bien cómo funciona. El sabor no me acaba de convencer. ¡¿EH?!"
    },
    {
      user : "Bryan4",
      rate : 4.0,
      date : "2022-02-22",
      text : "Supongo que lo volveré a comprar, que güeno"
    },
    {
      user : "Davidesen5",
      rate : 1.75,
      date : "2020-04-15",
      text : "No sé muy bien cómo funciona. El sabor no me acaba de convencer. ¡¿EH?!"
    },
    {
      user : "Bryan6",
      rate : 4.0,
      date : "2022-02-22",
      text : "Supongo que lo volveré a comprar, que güeno"
    },
    {
      user : "Davidesen7",
      rate : 1.75,
      date : "2020-04-15",
      text : "No sé muy bien cómo funciona. El sabor no me acaba de convencer. ¡¿EH?!"
    },
    {
      user : "Bryan8",
      rate : 4.0,
      date : "2022-02-22",
      text : "Supongo que lo volveré a comprar, que güeno"
    },
    {
      user : "Davidesen9",
      rate : 1.75,
      date : "2020-04-15",
      text : "No sé muy bien cómo funciona. El sabor no me acaba de convencer. ¡¿EH?!"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.showLoadButton = this.productReviews.length > this.quantityOfReviews;
    this.loadMoreItems()
  }

  loadMoreItems() {
    if (this.currentIndex + this.quantityOfReviews > this.productReviews.length - 1 ) {
      this.productReviewsToShow.push(...this.productReviews.slice(this.currentIndex));
      this.showLoadButton = false;
    } else {
      this.productReviewsToShow.push(...this.productReviews.slice(this.currentIndex, this.currentIndex + this.quantityOfReviews));
      this.showLoadButton = true;
    }

    this.currentIndex += this.quantityOfReviews;
  }
}
