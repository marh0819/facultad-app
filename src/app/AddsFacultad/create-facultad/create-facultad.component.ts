import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-facultad',
  templateUrl: './create-facultad.component.html',
  styleUrls: ['./create-facultad.component.css']
})
export class CreateFacultadComponent {
  facultadForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.facultadForm = formBuilder.group({nombre:["",[Validators.required, Validators.minLength(3)]]
    });
  }

  createPais(value: any) {
    return false;
  }
}
