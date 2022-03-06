import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-flip',
  templateUrl: './banner-flip.component.html',
  styleUrls: ['./banner-flip.component.scss']
})
export class BannerFlipComponent implements OnInit {

  @Input() bannerFlipConfig : any;
  constructor() { }

  ngOnInit(): void {
  }

}
