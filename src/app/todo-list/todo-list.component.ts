import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/modele/todo';
import { CalculServiceService } from '../services/calcul-service.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  listTodo:Todo[];
  n: number;
  errMess: string;


  constructor(private todoService:TodoService,private service:CalculServiceService) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe((todos)=>{this.listTodo=todos},errmess => {this.errMess = <any>errmess});
    this.n=this.service.getNumberOf(this.listTodo,"completed",true);
  }

}
