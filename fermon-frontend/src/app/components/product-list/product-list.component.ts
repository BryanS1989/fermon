import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsTitle : string = 'Nuestros productos';

  products : any[] = [
    {
      id : 0,
      name : "Tornillo DIN 7985 Inox",
      shortDescription : "3mm de diametro",
      price : "0.5",
      currency : "euro",
      category : [2]
    },
    {
      id : 1,
      name : "Arandela DIN 125 Inox",
      shortDescription : "5mm de diametro",
      price : "0.25",
      currency : "euro",
      category : [1, 0]
    },
    {
      id : 2,
      name : "TUERCA DIN 985 INOX",
      shortDescription : "15mm de diametro",
      price : "0.95",
      currency : "euro",
      category : [1, 0]
    },
    {
      id : 3,
      name : "Varilla roscada DIN 975 Inox",
      shortDescription : "2cm de largo",
      price : "1.25",
      currency : "euro",
      category : [1, 2]
    },
    {
      id : 4,
      name : "Pistola 'ERGO GARDEN'",
      shortDescription : "Con tres modos de dispersión",
      price : "19.95",
      currency : "euro",
      category : [3, 0, 0]
    },
    {
      id : 5,
      name : "Tornillo DIN 7982 Inox",
      shortDescription : "1cm de diametro",
      price : "0.1",
      currency : "euro",
      category : [2]
    },
  ];

  filteredProducts : any[] = [];
  preselectedCategory : any[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const categoryIdPreSelected = this.route.snapshot.paramMap.get('categoryId')!;

    if (categoryIdPreSelected !== null) {
      this.preselectedCategory.push({
        id : parseInt(categoryIdPreSelected),
        title : ""
      });
    }
  }

  setFilteredProducts(filteredResult : any[]) : void {
    this.filteredProducts = filteredResult;
  }

}
