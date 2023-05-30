import { Component } from '@angular/core';
import {Facultad} from "../model/facultad";
import {FacultadesService} from "../service/facultades.service";

@Component({
  selector: 'app-list-facultades',
  templateUrl: './list-facultades.component.html',
  styleUrls: ['./list-facultades.component.css']
})
export class ListFacultadesComponent {
  public facultades: Array<Facultad> =[];
  public facultadSelected!: Facultad;
  public selected: boolean = false;

  constructor(private facultadesService: FacultadesService) {

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
  }
  onSelected(facultad: Facultad) {
    this.selected=true;
    this.facultadSelected = facultad;
    //swal.fire('Any fool can use a computer')
  }
}
