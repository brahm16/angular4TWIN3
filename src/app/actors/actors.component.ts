import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/modele/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  listActor:Actor[]
  myFunc(actor: Actor){
    let index=this.listActor.indexOf(actor);
    this.listActor.splice(index,1)
    console.log("test")
  }

  constructor() { 

    this.listActor=[
      {'lastName':'Robert','firstName':'Julia'},
      {'lastName':'Walker','firstName':'Paul'},
      {'lastName':'Pitt','firstName':'Brad'}
      ]
  }

  ngOnInit(): void {
  
  }

}
