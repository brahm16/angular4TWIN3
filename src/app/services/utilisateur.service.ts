import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/modele/utilisateur';
import { baseURL } from 'src/shared/BaseURL';
import { UTILISATEURS } from 'src/shared/utilisateurs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {



  constructor(private http: HttpClient) { }

  getUtilisateurs(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(baseURL+'users')  }
}
