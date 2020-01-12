import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(): void {
    this.deleteEvent.emit(this.item.id)
  }

  completeItem(): void {
    console.log('complete')
  }

  editItem(): void {
    this.editEvent.emit(this.item.id)
  }
}
