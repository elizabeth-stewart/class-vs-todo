import { Component, OnInit } from '@angular/core';
import { rootRenderNodes } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]

  message: string

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('templeton').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  updateTodo(id) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id]);
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('templeton', id).subscribe(
      response => {
        this.message = `Successfully deleted ${id}`;
        this.refreshTodos();
      }
    );
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
