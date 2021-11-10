import { Injectable } from '@angular/core';
import { Materias } from 'src/app/interfaces/materias';
import { MATERIAS } from './MATERIAS.const';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private materias: Array<Materias>;

  constructor() { 
    this.materias = MATERIAS;
  }
  
  
  public getAllMaterias(): Array<Materias> {
    return this.materias;
  }
  
  public getMateriaById(id:number) {
    return this.materias.find((materias: Materias) => materias._id === id);
  }
}
