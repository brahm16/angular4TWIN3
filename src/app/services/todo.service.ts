import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/modele/todo';
import { baseURL } from 'src/shared/BaseURL';
import { TODOS } from 'src/shared/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(baseURL+'todos');
  }
  getById(id : number): Observable<Todo>{
    return this.http.get<Todo>(baseURL+'todos/'+id);
  }
  getByUser(iduser: number): Observable<Todo[]>{
    return this.http.get<Todo[]>(baseURL+'todos?iduser='+iduser);
  }


  constructor(private http: HttpClient) { }
}
