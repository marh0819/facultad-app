import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facultad} from "../model/facultad";

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {
  private baseUrl: string = "https://gist.githubusercontent.com/marh0819/09c5a3da781545c41d676fa4c6df8d5b/raw/368703a7d3fcd3bdcde8133148515fcca05e2920/gistfile1.txt"
  //private baseUrl: string =  "http://localhost:8081/facultad-service/listar";

  constructor(private httpClient: HttpClient) { }

//observable es parte de la interfaz reactiva de javascript (rxjs)
  getFacultades(): Observable<Facultad[]>{
    return this.httpClient.get<Facultad[]>(this.baseUrl);
  }


}
