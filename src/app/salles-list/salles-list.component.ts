import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/modele/salle';
import { SallesService } from '../services/salles.service';

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit {

  salles:Salle[];

  constructor(private sallesService:SallesService) { }

  ngOnInit(): void {
    this.sallesService.getSalles().subscribe((salles)=>this.salles=salles);

  }

}
