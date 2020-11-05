import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/modele/contact';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  fg:FormGroup;
  contact:Contact;
  listContact: Contact[]=[];


  constructor() { }

  ngOnInit(): void {
    this.contact=new Contact()
    this.fg=new FormGroup({
      nom:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('test@gmail.com', [Validators.required,
        Validators.pattern('[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]{2,4}')]),
        information: new FormGroup({
          cardType: new FormControl('test', Validators.required),
          cardNumber: new FormControl('12345', [Validators.required, Validators.pattern('[0-9]{5}')]),
          date: new FormControl(''),
          code: new FormControl('45')
        })     


      //  city:new FormControl(" ",[Validators.required,Validators.minLength(3)]),



 


    })

  }
  save(){
    console.log(this.fg.value);
    console.log(this.contact);
    let c=new Contact();
    Object.assign(c, this.fg.value);
    this.listContact.push(c);


    this.contact = <Contact> this.fg.value;
    console.log(this.contact);
    console.log(this.listContact);
    console.log(this.contact);
    this.fg.reset();
  //  
    console.log(this.contact);
  }
  get nom(){
    return this.fg.get('nom')
  }
  get email() {
    return this.fg.get('email');
  }
  
  get cardType() {
    return this.fg.get('information').get('cardType');
  }

  get cardNumber() {
    return this.fg.get('information').get('cardNumber');
  }

  get date() {
    return this.fg.get('information').get('date');
  }

  get code() {
    return this.fg.get('information').get('code');
  }

}
