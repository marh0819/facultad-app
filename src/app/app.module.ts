import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterOutlet} from "@angular/router";
import {FacultadesModule} from "./facultades/facultades.module";
import {FacultadesService} from "./facultades/service/facultades.service";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {AddsFacultadesModule} from "../../../facultad-app/src/app/AddsFacultad/AddsFacultades";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
    imports: [
        BrowserModule,
        FacultadesModule,
        CommonModule,
        AddsFacultadesModule,
        HttpClientModule,
        AppRoutingModule

    ],
  providers: [FacultadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
