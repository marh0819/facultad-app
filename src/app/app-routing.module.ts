import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListFacultadesComponent} from "./facultades/list-facultades/list-facultades.component";

const routes: Routes = [
  {
    path: '',
    component: ListFacultadesComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
