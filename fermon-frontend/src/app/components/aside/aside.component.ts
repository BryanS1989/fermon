import { Component, OnInit } from '@angular/core';

import { faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  menuClose = faXmark;

  showSideMenu = false;

  constructor() { }

  ngOnInit(): void {
    this.toggleScroll();
  }

  toggleSideMenu() : void {
    this.showSideMenu = !this.showSideMenu;
    this.toggleScroll();
  }

  toggleScroll() {
    let body = document.querySelector('body');
    body?.classList.toggle('overflow-hidden');
  }
}
