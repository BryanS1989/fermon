import { Component, OnInit } from '@angular/core';

import { faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  menuClose = faXmark;

  showSideMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideMenu() : void {
    this.showSideMenu = !this.showSideMenu;
  }
}
