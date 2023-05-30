import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFacultadesComponent } from './list-facultades/list-facultades.component';
import {DetailFacultadesComponent} from "../detail-facultades/detail-facultades.component";


@NgModule({
  declarations: [
    ListFacultadesComponent,
    DetailFacultadesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacultadesModule { }
