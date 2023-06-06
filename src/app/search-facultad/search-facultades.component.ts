import { Component } from '@angular/core';
import {Facultad} from "../facultades/model/facultad";
import {FacultadesService} from "../facultades/service/facultades.service";
import {FormControl} from "@angular/forms";
import {query} from "@angular/animations";
import {debounceTime, map} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-search-facultades',
  templateUrl: './search-facultades.component.html',
  styleUrls: ['./search-facultades.component.css']
})
export class SearchFacultadesComponent {

  control = new FormControl();
  public facultades: Array<Facultad> =[];
  public facultadSelected!: Facultad;
  public selected: boolean = false;
  facul=[]
  constructor(private http:HttpClient, private facultadesService: FacultadesService) {

  }
  public getFacultades(){
    this.facultadesService.getFacultades().subscribe(
      (facultades: Array<Facultad>) =>{
        this.facultades=facultades;
      }
    );
  }
  ngOnInit(): void {
    this.getFacultades();
    this.observerChangeSearch()
  }
  onSelected(facul: Facultad) {
    this.selected=true;
    this.facultadSelected = facul;
    //swal.fire('Any fool can use a computer')
  }
  getFacul(query: string) {
    const params = new HttpParams().set('q', query);

    this.http.get('http://localhost:8081/facultad-service/listar', { params })
      .subscribe((result: any) => {
        this.facul = result.response.hits.map((hit: any) => hit.result);
      });
  }

  observerChangeSearch(){
    this.control.valueChanges
      .pipe(debounceTime(800))
      .subscribe(query => console.log(query) )
  }


}
