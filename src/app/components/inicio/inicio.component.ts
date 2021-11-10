import { Component, OnInit } from '@angular/core';
import { Materias } from 'src/app/interfaces/materias';
import { MateriasService } from 'src/app/services/materias/materias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  public materias: Materias[];

  constructor(private materiasService: MateriasService) { 
    this.materias = this.materiasService.getAllMaterias();
  }

  ngOnInit(): void {
  }

}
