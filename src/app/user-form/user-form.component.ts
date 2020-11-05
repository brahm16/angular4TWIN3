import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/modele/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user:User;
  fg:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.user=new User();
    this.fg=new FormGroup({
      name: new FormControl(this.user.nom,[Validators.required])
    })

  }
  onSubmit(){
    alert("t3adet");
  }

}
