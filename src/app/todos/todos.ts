import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos as TodoService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((e) => {
          console.log(e);
          throw e;
        }),
      )
      .subscribe((response) => {
        this.todoItems.set(response.todos);
      });
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) =>
      todos.map((todo) =>
        todo.id === todoItem.id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
}
