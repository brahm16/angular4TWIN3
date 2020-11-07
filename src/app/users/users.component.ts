import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/modele/utilisateur';
import { CalculServiceService } from '../services/calcul-service.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Utilisateur[];
  n: number;
  search: string

   constructor(private service:CalculServiceService,private userService:UtilisateurService) { }
   getNbr(){
     this.n=this.service.getNumberOf(this.users,"username",this.search);
     alert("le nombre d'occurence est : "+this.n);
   }

  ngOnInit(): void {
    this.userService.getUtilisateurs().subscribe((users)=>this.users=users);
    
  }

}
