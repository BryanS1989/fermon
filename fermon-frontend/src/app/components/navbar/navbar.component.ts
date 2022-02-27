import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { faMagnifyingGlass, faUser, faCartShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  placeHolder = "¿Qué es lo que buscas?"

  searchInput = new FormControl('');
  searchValue = "";

  showSideMenu = false;

  searchIcon = faMagnifyingGlass;
  userIcon = faUser;
  cartIcon = faCartShopping;
  menuIcon = faBars;
  menuClose = faXmark;

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => {
      this.searchValue = value;
    });
  }

  searchProducts() : void {

  }

  toggleSideMenu() : void {
    this.showSideMenu = !this.showSideMenu;
  }

}
