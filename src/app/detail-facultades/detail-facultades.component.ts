import {Component, Input} from '@angular/core';
import {Facultad} from "../facultades/model/facultad";

@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-facultades.component.html',
  styleUrls: ['./detail-facultades.component.css']
})
export class DetailFacultadesComponent {
  @Input() public facultad!: Facultad;


}
