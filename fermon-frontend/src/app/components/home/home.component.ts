import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners = [
    {
      title: "FERRETERIA FERMON S.L.",
      cite: "El servicio al cliente es nuestra máxima prioridad",
      text: "Desde 1959 ofreciendo el mejor servicio a nuestros clientes, ofreciendo los mejores artículos al mejor precio",
      button: {
        text: "NOSOTROS",
        route: "legal/policy"
      },
      image: "BANNER_IMAGE_1"
    },
    {
      title: "Amplia experiencia en el sector",
      cite: "Trabajamos con las primeras marcas",
      text: "En Ferreteria FERMON S.L encontrarás las primeras marcas del sector",
      button: {
        text: "MARCAS",
        route: "legal/policy"
      },
      image: "BANNER_IMAGE_2"
    },
    {
      title: "Amplia experiencia en el sector",
      cite: "Trabajamos con las primeras marcas",
      text: "En Ferreteria FERMON S.L encontrarás las primeras marcas del sector",
      button: {
        text: "MARCAS",
        route: "legal/policy"
      },
      image: "BANNER_IMAGE_3"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
