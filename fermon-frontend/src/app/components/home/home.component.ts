import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners : any = [
    {
      title: "FERRETERIA FERMON S.L.",
      cite: "El servicio al cliente es nuestra máxima prioridad",
      text: "Desde 1959 ofreciendo el mejor servicio a nuestros clientes, ofreciendo los mejores artículos al mejor precio",
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
      title: "Kits de suministros",
      cite: "Todo lo que necesitas en un espacio reducido",
      text: "Con nuestros nuevos kits de suminisitros tendrás tus tuercas, arandelas y tornillos siempre bien organizados",
      button: {
        text: "KITS",
        route: "legal/policy"
      },
      image: "BANNER_IMAGE_3"
    }
  ];

  products : any = [
    {
      id : 0,
      name : "Tornillo DIN 7985 Inox",
      shortDescription : "3mm de diametro",
      price : "0.5",
      currency : "euro"
    },
    {
      id : 1,
      name : "Arandela DIN 125 Inox",
      shortDescription : "5mm de diametro",
      price : "0.25",
      currency : "euro"
    },
    {
      id : 2,
      name : "TUERCA DIN 985 INOX",
      shortDescription : "15mm de diametro",
      price : "0.95",
      currency : "euro"
    },
    {
      id : 3,
      name : "Varilla roscada DIN 975 Inox",
      shortDescription : "2cm de largo",
      price : "1.25",
      currency : "euro"
    },
    {
      id : 4,
      name : "Pistola 'ERGO GARDEN'",
      shortDescription : "Con tres modos de dispersión",
      price : "19.95",
      currency : "euro"
    }
  ];

  productSliderConfig : any = {
    title : "Los mejores productos",
    button : {
      route: "/legal/policy"
    }
  };

  productSliderConfig2 = {
    title : "Tornillería",
    banner : {
      image : "BANNER_IMAGE_3",
      button : {
        text: "VER CATEGORIA",
        route: "/legal/cookies"
      },
    },
    button : {
      route: "/legal/policy"
    }
  };

  bannerFlipConfig : any = {
    front : {
      image: "BANNER_IMAGE_1"
    },
    back : {
      image: "BANNER_IMAGE_2"
    }
  };

  constructor() { }

  ngOnInit(): void {
  }


}
