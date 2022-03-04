import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { faMagnifyingGlass, faUser, faCartShopping, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  placeHolder = "¿Qué es lo que buscas?"

  searchInput = new FormControl('');
  searchValue = "";
  searchIcon = faMagnifyingGlass;

  constructor() { }

  ngOnInit(): void {
    this.searchInput.valueChanges.subscribe(value => {
      this.searchValue = value;
    });
  }

  searchProducts() : void {

  }
}
