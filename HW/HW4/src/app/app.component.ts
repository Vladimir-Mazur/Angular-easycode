import { Component } from '@angular/core';
import { Todo } from './interfaces/Todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [
    {
      id: 1,
      title: 'Learn JavaScript',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
    }
  ];

  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  onFormSubmit(todo: Todo): void {
    const newTodo: Todo = {
      ...todo,
      isCompleted: false,
      id: Math.random()
    }

    this.todoList.push(newTodo);
  }

  editTodoItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
}
