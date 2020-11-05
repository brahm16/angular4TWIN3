import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  nom:FormControl=new FormControl();
  fg:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.fg=new FormGroup({
      nom:new FormControl(" ",[Validators.required,Validators.minLength(3)]),
      email:new FormControl(" ",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      address:new FormGroup({
        street:new FormControl(" ",[Validators.required,Validators.minLength(3)]),
      //  city:new FormControl(" ",[Validators.required,Validators.minLength(3)]),



      })


    })
    this.nom=new FormControl(" ",[Validators.required,Validators.minLength(3)]);
  }
  cancel(){
    this.fg.reset();
  }
  test(){
    alert("form t3adett "+JSON.stringify(this.fg.value));
  }

}
