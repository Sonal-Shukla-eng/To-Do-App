import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../app/todo.model'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: any[] = [];
  nextId = 1;

  constructor() { }

  getTodo(): any {
    console.log("this.todos 15", this.todos)
    return this.todos;
  }

  addTodo(title: string) {
    this.todos.push({
      id: this.nextId,
      title,
      completed: false
    });
  }

  toggleTodoCompletion(id:number){
    const todo = this.todos.find( todo => todo.id === id);
    if(todo){
      todo.completed = !todo.completed
    }
  }

  deleteToDo(id:number){
    this.todos = this.todos.filter(todo => todo.id! == id);
  }
}

