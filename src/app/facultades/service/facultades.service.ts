import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Facultad} from "../model/facultad";

@Injectable({
  providedIn: 'root'
})
export class FacultadesService {

  //Se define la url del servicio REST
  private urlEndPoint: string = 'http://localhost:8081/facultad-service/facultad';

  private baseUrl: string = "http://localhost:8081/facultad-service/listar"

  //Metodo para crear un pais con HttpClient por el metodo POST
  save(facultad: any): Observable<Facultad> { //Se retorna un objeto observable que espera a que este disponible el objeto Pais
    return this.httpClient.post<Facultad>(this.urlEndPoint, facultad).pipe( //Se realiza la peticion POST al servicio REST
      catchError(() => throwError(() => new Error('Error al crear la facultad'))) //Se captura el error en caso de que exista
    );
  }

  constructor(private httpClient: HttpClient) { }

//observable es parte de la interfaz reactiva de javascript (rxjs)
  getFacultades(): Observable<Facultad[]>{
    return this.httpClient.get<Facultad[]>(this.baseUrl);
  }


}
