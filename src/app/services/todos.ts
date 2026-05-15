import { inject, Injectable, signal } from '@angular/core';
import { Todo, TodosResponse } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  http = inject(HttpClient);
  getTodosFromApi() {
    return this.http.get<TodosResponse>('https://dummyjson.com/todos');
  }
}
