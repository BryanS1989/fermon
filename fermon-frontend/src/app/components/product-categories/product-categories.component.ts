import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  categories : any[] = [
    {
      id : 0,
      title : "Ferretería",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Medición"
        },
        {
          id : 1,
          title : "Jardinería"
        },
        {
          id : 2,
          title : "Escaleras"
        },
        {
          id : 3,
          title : "Pintura"
        },
        {
          id : 4,
          title : "Herraje"
        },
        {
          id : 5,
          title : "Electricidad"
        }
      ]
    },
    {
      id : 1,
      title : "Maquinaria",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Eléctrica"
        },
        {
          id : 1,
          title : "Neumática"
        },
        {
          id : 2,
          title : "Bombas y Motores"
        }
      ]
    },
    {
      id : 2,
      title : "Tornillería"
    },
    {
      id : 3,
      title : "Herramientas",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Manuales",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Fontaneria",
            },
            {
              id : 1,
              title : "Construcción",
            },
            {
              id : 2,
              title : "Electricista",
            },
            {
              id : 3,
              title : "Mecánico",
            },
            {
              id : 4,
              title : "Carpintería",
            }
          ]
        },
        {
          id : 1,
          title : "De corte",
        }
      ]
    },
    {
      id : 4,
      title : "Droguería",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Aceites y lubricantes"
        },
        {
          id : 1,
          title : "Droguería industrial"
        }
      ]
    },
    {
      id : 5,
      title : "Soldadura",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Protección"
        },
        {
          id : 1,
          title : "Recambios"
        },
        {
          id : 3,
          title : "Maquinaria"
        }
      ]
    },
    {
      id : 6,
      title : "Protección Laboral",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Material de protección"
        }
      ]
    },
    {
      id : 7,
      title : "Fijación",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Siliconas y sellantes"
        }
      ]
    },
    {
      id : 8,
      title : "Sumninistros Industriales",
      showChildren : false,
      children : [
        {
          id : 0,
          title : "Abrasivos"
        },
        {
          id : 1,
          title : "Racors especiales",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Barcelona"
            },
            {
              id : 1,
              title : "Guillemin"
            },
            {
              id : 2,
              title : "Camlock"
            }
          ]
        },
        {
          id : 2,
          title : "Soportes Antivibratorios"
        },
        {
          id : 3,
          title : "Mangueras",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Contra incendios"
            },
            {
              id : 1,
              title : "Aire"
            },
            {
              id : 2,
              title : "Agua"
            }
          ]
        },
        {
          id : 4,
          title : "Elevación",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Polipastos"
            },
            {
              id : 1,
              title : "Eslingas y Trinquetes"
            }
          ]
        },
        {
          id : 5,
          title : "Accesorios",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Válvulas y griferías"
            },
            {
              id : 1,
              title : "Racorería"
            }
          ]
        },
        {
          id : 6,
          title : "Ruedas",
          showChildren : false,
          children : [
            {
              id : 0,
              title : "Neumáticas"
            },
            {
              id : 1,
              title : "Poliuretano",
              showChildren : false,
              children : [
                {
                  id : 0,
                  title : "Fundido"
                },
                {
                  id : 1,
                  title : "Inyectado"
                }
              ]
            },
            {
              id : 2,
              title : "Goma",
              showChildren : false,
              children : [
                {
                  id : 0,
                  title : "Gris"
                },
                {
                  id : 1,
                  title : "Negra"
                }
              ]
            },
            {
              id : 2,
              title : "Poliamix"
            },
            {
              id : 3,
              title : "Nylon"
            }
          ]
        },
        {
          id : 7,
          title : "Neumática"
        }
      ]
    },
    {
      id : 9,
      title : "Led"
    }
  ];

  @Output() selectedCategory : EventEmitter<any[]> = new EventEmitter();
  @Output() selectedCategories : EventEmitter<any[]> = new EventEmitter();

  lastCategorySelected : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedCategory(category : any[]) {
    console.log("[ProductCategoriesComponent] setSelectedCategory: ");
    console.log(category);

    this.hideOthers(category);

    this.selectedCategory.emit(category);
  }

  hideOthers(categoryShow : any[]) {
    console.log("[ProductCategoriesComponent] hideOthers: ");

    if (this.lastCategorySelected.length !== 0) {

    }

    this.lastCategorySelected = categoryShow;
  }
}
