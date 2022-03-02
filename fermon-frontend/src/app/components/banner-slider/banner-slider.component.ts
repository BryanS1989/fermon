import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";

import { faAngleRight, faAngleLeft, faCircleDot, faCircle } from "@fortawesome/free-solid-svg-icons";

import { fadeIn, fadeOut } from "../../animations/fade.animation";

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss'],
  animations: [
    trigger('slideBannerAnimation', [
      transition('void => *', [
        useAnimation(fadeIn)
      ]),
      transition('* => void', [
        useAnimation(fadeOut)
      ])
    ])
  ]
})
export class BannerSliderComponent implements OnInit {

  @Input() banners : any;

  nextIcon = faAngleRight;
  previousIcon = faAngleLeft;
  dotIcon = faCircleDot;
  dotSelectedIcon = faCircle;

  slideIndex : number = 0;

  constructor() { }

  ngOnInit(): void {
    //this.automaticSlideBanner();
  }

  slideImageBanner(n : number) : void {
    let nextImage = this.slideIndex + n;
    this.slideIndex = (nextImage >= this.banners.length) ? 0 : (nextImage < 0) ? (this.banners.length - 1) : nextImage;
  }

  selectedBannerImage(n : number) : void {
    this.slideIndex = n;
  }

  automaticSlideBanner() {
    setTimeout(() => {
      this.slideImageBanner(1);
      this.automaticSlideBanner();
    }, 5000);
  }

}
