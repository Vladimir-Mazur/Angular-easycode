import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() list: Array<Todo>
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(id: number): void {
    this.deleteEvent.emit(id)
  }

  onEditItem(id: number): void {
    this.editEvent.emit(id)
  }
}
