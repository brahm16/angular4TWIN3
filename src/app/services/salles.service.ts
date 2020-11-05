import { Injectable } from '@angular/core';
import { Salle } from 'src/modele/salle';
import { SALLES } from 'src/shared/salles';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  getSalles(): Salle[]{
    return SALLES;
  }
  getSalle(id: number): Salle{
    return SALLES.filter(x=>x.id===id)[0];
  }

  constructor() { }
}
