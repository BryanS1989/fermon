import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { faArrowUp, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  upIcon = faAnglesUp;

  pageYoffset = 0;

  @HostListener('window:scroll', ['$event']) onScroll(event : any){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop() : void {
    this.scroll.scrollToPosition([0,0]);
  }

}
