import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Materias } from 'src/app/interfaces/materias';
import { MateriasService } from 'src/app/services/materias/materias.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  
  
  public bandera:boolean;
  formulario: FormGroup;
  
  public materias: Array<Materias>;
  
  constructor(private materiasService: MateriasService, public Form: FormBuilder) {
    this.formulario = Form.group({
      nombre: ['', [Validators.required]],
      nota1: ['', [Validators.required, Validators.max(7.0), Validators.min(1.0)]],
      nota2: ['', [Validators.required, Validators.max(7.0), Validators.min(1.0)]],
      nota3: ['', [Validators.required, Validators.max(7.0), Validators.min(1.0)]],
      nota4: ['', [Validators.required, Validators.max(7.0), Validators.min(1.0)]],
      nota5: ['', [Validators.required, Validators.max(7.0), Validators.min(1.0)]],
      porcentaje1: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      porcentaje2: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      porcentaje3: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      porcentaje4: ['', [Validators.required, Validators.max(100), Validators.min(0)]],
      porcentaje5: ['', [Validators.required, Validators.max(100), Validators.min(0)]]
      
    })
    this.materias = this.materiasService.getAllMaterias();
    this.bandera = false;
  }
  
  calcularPromedio():number {
    let nota1 = this.formulario.value.nota1*(this.formulario.value.porcentaje1/100);
    let nota2 = this.formulario.value.nota2*(this.formulario.value.porcentaje2/100);
    let nota3 = this.formulario.value.nota3*(this.formulario.value.porcentaje3/100);
    let nota4 = this.formulario.value.nota4*(this.formulario.value.porcentaje4/100);
    let nota5 = this.formulario.value.nota5*(this.formulario.value.porcentaje5/100);
    
    let promedio = Math.round((nota1 + nota2 + nota3 + nota4 + nota5)*10)/10;
    return promedio;
  }
  
  ngOnInit(): void {
  }

  calcularPorcentajes():number { 
    let porcentaje1 = this.formulario.value.porcentaje1;
    let porcentaje2 = this.formulario.value.porcentaje2;
    let porcentaje3 = this.formulario.value.porcentaje3;
    let porcentaje4 = this.formulario.value.porcentaje4;
    let porcentaje5 = this.formulario.value.porcentaje5;
    let total = porcentaje1 + porcentaje2 + porcentaje3 + porcentaje4 + porcentaje5;
    
    return total;
  }

  onSubmit():any {
    if(this.calcularPorcentajes() == 100){

      const lastId = this.materias[this.materias.length-1]._id + 1;
  
      const Materia = {
        _id: lastId,
        nombre: this.formulario.value.nombre,
        nota: this.calcularPromedio(),
      }
      
      this.materias.push(Materia);
    }
    else {
      alert("¡Hubo un problema!");
      this.bandera = true;
    }
  }
  
}
