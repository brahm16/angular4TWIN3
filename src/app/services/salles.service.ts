import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salle } from 'src/modele/salle';
import { baseURL } from 'src/shared/BaseURL';
import { SALLES } from 'src/shared/salles';

@Injectable({
  providedIn: 'root'
})
export class SallesService {

  getSalles(): Observable<Salle[]>{
    return this.http.get<Salle[]>(baseURL+'salles');
  }
  getSalle(id: number): Observable<Salle>{
    return this.http.get<Salle>(baseURL+'salles/'+id);
  }

  constructor(private http: HttpClient) { }
}
