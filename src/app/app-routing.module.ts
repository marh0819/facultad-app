import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListFacultadesComponent} from "./facultades/list-facultades/list-facultades.component";
import {CreateFacultadComponent} from "./AddsFacultad/create-facultad/create-facultad.component";

const routes: Routes = [
  {
    path: 'facultades',
    component: ListFacultadesComponent
  },
  {
    path: 'facultades/crear',
    component: CreateFacultadComponent
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
