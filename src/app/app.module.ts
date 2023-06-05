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
import {ReactiveFormsModule} from "@angular/forms";
import { CreateFacultadComponent } from './AddsFacultad/create-facultad/create-facultad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateFacultadComponent
  ],
    imports: [
      BrowserModule,
      FacultadesModule,
      CommonModule,
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule
    ],
  providers: [FacultadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
