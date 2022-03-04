import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";

import { faAngleRight, faAngleLeft, faCircleDot, faCircle  } from "@fortawesome/free-solid-svg-icons";

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

  automaticSlide : any = null;

  constructor() { }

  ngOnInit(): void {
    this.automaticSlide = this.automaticSlideTimer();
  }

  slideImageBanner(n : number) : void {
    this.resetTimer();
    let nextImage = this.slideIndex + n;
    this.slideIndex = (nextImage >= this.banners.length) ? 0 : (nextImage < 0) ? (this.banners.length - 1) : nextImage;
  }

  selectedBannerImage(n : number) : void {
    this.resetTimer();
    this.slideIndex = n;
  }

  resetTimer() {
    clearTimeout(this.automaticSlide);
    this.automaticSlide = this.automaticSlideTimer();
  }

  automaticSlideTimer () {
    return setTimeout(() => {
      this.slideImageBanner(+1);
    }, 5000);
  }

}
