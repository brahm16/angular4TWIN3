import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from 'src/modele/salle';
import { SallesService } from '../services/salles.service';

@Component({
  selector: 'app-details-salle',
  templateUrl: './details-salle.component.html',
  styleUrls: ['./details-salle.component.css']
})
export class DetailsSalleComponent implements OnInit {
  salle: Salle;

  constructor(private salleService:SallesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.salleService.getSalle(id).subscribe((salle)=>this.salle=salle);

  }

}
