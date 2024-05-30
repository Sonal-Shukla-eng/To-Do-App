import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent implements OnInit {
  newTodoTitle: string = '';
  todos: Todo[] = [];
id : any;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
this.todos = this.todoService.getTodo();

  }

  addTodo() {
    console.log("this.newTodoTitle",this.newTodoTitle)
    if(this.newTodoTitle.trim()){
      this.todoService.addTodo(this.newTodoTitle);
      console.log("this.newTodoTitle 27",this.newTodoTitle)
      this.newTodoTitle = "";
      this.todos = this.todoService.getTodo();
    }
  }

  toggleCompletion() : void{
    this.todoService.toggleTodoCompletion(this.id)
  }

  deleteTodo(){
    this.todoService.deleteToDo(this.id);
    this.todos = this.todoService.getTodo();
  }
}
