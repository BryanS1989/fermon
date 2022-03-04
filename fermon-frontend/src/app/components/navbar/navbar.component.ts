import { Component, OnInit } from '@angular/core';

import { faUser, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showSideMenu = false;

  userIcon = faUser;
  cartIcon = faCartShopping;
  menuIcon = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideMenu() : void {
    this.showSideMenu = !this.showSideMenu;
  }

}
