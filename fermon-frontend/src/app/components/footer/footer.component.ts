import { Component, OnInit } from '@angular/core';
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  companyName = "Suministros Fermon S.L.";
  fermonInfo = [
    {
      icon : faLocationDot,
      style: "--fa-animation-duration: 3s;",
      href: "https://www.google.com/maps/place/Ferreter%C3%ADa+Fermon+(Suministros+Industriales)/@41.326641,2.0907591,19z/data=!3m1!4b1!4m5!3m4!1s0x12a49ec3fce03649:0xc97863cb29b928e!8m2!3d41.32664!4d2.0913063",
      class : ['fa-bounce', 'fa-lg'],
      show: false,
      text : "Av. d'Apel·les Mestres, 9, 08820 Prat De Llobregat, Barcelona"
    },
    {
      icon : faPhone,
      style: "--fa-animation-duration: 3s;",
      href: 'tel:+34933790320',
      class : ['fa-shake', 'fa-lg'],
      show: false,
      text : '(+34) 93 379 03 20'
    },
    {
      icon : faEnvelope,
      style: "--fa-animation-duration: 3s;",
      href: 'mailto:info@ferreteriafermon.com',
      class : ['fa-beat', 'fa-lg'],
      show: false,
      text : 'info@ferreteriafermon.com'
    }
  ];
  rrssInfo = [
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com"
    },
    {
      icon: faTwitter,
      href: "https://twitter.com/SumFermon"
    },
    {
      icon: faFacebook,
      href: "https://www.facebook.com/Ferreteria-Fermon-Suministros-Industriales-143460399448982"
    }
  ];
  legalInfo = [
    {
      text : "Aviso legal",
      href : ""
    },
    {
      text : "Politica de privacidad",
      href : ""
    },
    {
      text : "Politica de cookies",
      href : ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleText(info : any) : void{
    info.show = !info.show;
  }

}
