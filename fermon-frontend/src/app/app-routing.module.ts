import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { LegalComponent } from "./components/legal/legal.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal/:type', component: LegalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
