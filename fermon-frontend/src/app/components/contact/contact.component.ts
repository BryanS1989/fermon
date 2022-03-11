import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  legalTermsVisible : boolean = false;

  contactForm = new FormGroup({
    client : new FormGroup({
      nameContact: new FormControl('', Validators.required),
      emailContact: new FormControl('', [Validators.required, Validators.email]),
      phoneContact: new FormControl('', [Validators.required, Validators.pattern("^(\\+34)[0-9 -]{9,13}$")])
    }),
    message : new FormGroup({
      subjectContact: new FormControl(''),
      messageContact: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
    }),
    legalInfo : new FormGroup({
      commercialContact: new FormControl(''),
      legalContact: new FormControl('', Validators.requiredTrue)
    })
  });

  formText = {
    nameContactLabel : "Nombre y apellidos",
    emailContactLabel : "Correo electrónico",
    phoneContactLabel : "Teléfono: +34666112233",
    content : {
      subjectContactLabel : "Asunto",
      messageContactLabel : "Cuéntanos, ¿qué necesitas?"
    },
    checkboxes : {
      commercialContactLabel : "Acepto recibir información comercial",
      legalContactLabel : "Acepto las ",
      legalContactLink : "condiciones y términos legales",
    }
  };

  iconValid = faCheck;
  iconInvalid = faXmark;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLegalTerms() : void {
    this.legalTermsVisible = !this.legalTermsVisible;
  }

  sendContactForm() : void {

  }

  get nameContact() {
    return this.contactForm.get('client')?.get('nameContact');
  }

  get emailContact() {
    return this.contactForm.get('client')?.get('emailContact');
  }

  get phoneContact() {
    return this.contactForm.get('client')?.get('phoneContact');
  }

  get subjectContact() {
    return this.contactForm.get('message')?.get('subjectContact');
  }

  get messageContact() {
    return this.contactForm.get('message')?.get('messageContact');
  }

  get commercialContact() {
    return this.contactForm.get('legalInfo')?.get('commercialContact');
  }

  get legalContact() {
    return this.contactForm.get('legalInfo')?.get('legalContact');
  }
}
