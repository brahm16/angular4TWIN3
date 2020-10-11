import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/modele/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  @Input() actor: Actor;
  @Output() notification = new EventEmitter<Actor>();

  supprimer(){
    this.notification.emit(this.actor);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
