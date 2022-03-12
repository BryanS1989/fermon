import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { LegalComponent } from "./components/legal/legal.component";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal/:type', component: LegalComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
