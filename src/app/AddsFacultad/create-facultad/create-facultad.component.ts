import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FacultadesService} from "../../facultades/service/facultades.service";
import {Facultad} from "../../facultades/model/facultad";

@Component({
  selector: 'app-create-facultad',
  templateUrl: './create-facultad.component.html',
  styleUrls: ['./create-facultad.component.css']
})
export class CreateFacultadComponent implements OnInit{

  public facultadForm!: FormGroup; // FormGroup es un conjunto de FormControl que se pueden agrupar en un formulario

  // FormBuilder es una clase que nos permite crear formularios de manera más sencilla
  constructor(private formBuilder: FormBuilder, private facultadService: FacultadesService) { // Inyectamos el servicio PaisService
  }

  ngOnInit(): void {
    this.facultadForm = this.formBuilder.group({ // Creamos el formulario con los campos que queremos que tenga
      nombre:["",[Validators.required, Validators.minLength(3)]] // El campo nombre es obligatorio y debe tener al menos 3 caracteres
    });
  }

  createFacultad(facultad: Facultad){ // Creamos un pais con el formulario que hemos creado y lo guardamos en la base de datos
    // El metodo save del servicio PaisService devuelve un Observable que nos permite suscribirnos a el y obtener la respuesta del servidor o un error
    this.facultadService.save(facultad).subscribe(
      response => { // Si la respuesta es correcta mostramos un mensaje de exito
        console.log(response);
        alert(`Pais ${facultad.nombre} creado con exito`);
      }, error => { //Si la respuesta es incorrecta mostramos un mensaje de error
        console.log(error);
        alert(`Error al crear el pais ${facultad.nombre}`);
      }
    );
  }

  // Este metodo se ejecuta cuando se pulsa el boton de cancelar y resetea el formulario
  cancelCreation(){
    this.facultadForm.reset();
  }

}
