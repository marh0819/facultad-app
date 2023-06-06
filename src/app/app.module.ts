import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FacultadesService} from "./facultades/service/facultades.service";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {BrowserModule} from "@angular/platform-browser";
import {FacultadesModule} from "./facultades/facultades.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//Componentes
import { CreateFacultadComponent } from './AddsFacultad/create-facultad/create-facultad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFacultadesComponent } from './search-facultad/search-facultades.component';
//Angular-material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateFacultadComponent,
    SearchFacultadesComponent
  ],
    imports: [
      BrowserModule,
      FacultadesModule,
      CommonModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      FormsModule
    ],
  providers: [FacultadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
