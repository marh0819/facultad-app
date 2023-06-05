import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facultad} from "../model/facultad";

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {
  private baseUrl: string = "http://localhost:8081/facultad-service/listar"
  //private baseUrl: string =  "http://localhost:8081/facultad-service/listar";

  constructor(private httpClient: HttpClient) { }

//observable es parte de la interfaz reactiva de javascript (rxjs)
  getFacultades(): Observable<Facultad[]>{
    return this.httpClient.get<Facultad[]>(this.baseUrl);
  }


}
