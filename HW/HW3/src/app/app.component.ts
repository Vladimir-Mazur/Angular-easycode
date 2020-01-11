import { Component } from '@angular/core';
import { Todo } from './components/interfaces/Todo';
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
      isCompleted: false,
      isInvisible: false,
    },
    {
      id: 2,
      title: 'Learn Angular',
      isCompleted: false,
      isInvisible: false,
    }
  ];
  
  taskList: Array<Todo> = this.todoList;
  currentFilter: string = 'all';

  deleteTodoItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  completeTodoItem(id: number): void{
    for (let i:number = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === id) {
        this.todoList[i].isCompleted = !this.todoList[i].isCompleted
      }
    }
  }

  showAll(id: number): void {
    for (let i:number = 0; i < this.todoList.length; i++) {
      this.todoList[i].isInvisible = false
    }
  }

  showCompleted(id: number): void {
    for (let i:number = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].isCompleted === true) {
        this.todoList[i].isInvisible = false
      } else {
        this.todoList[i].isInvisible = true
      }
    }
  }

  showUncompleted(id: number): void {
    for (let i:number = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].isCompleted === true) {
        this.todoList[i].isInvisible = true
      } else {
        this.todoList[i].isInvisible = false
      }
    }
  }
}
