import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/components/interfaces/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() list: Array<Todo>
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() completeEvent = new EventEmitter<void>();
  @Output() showAll = new EventEmitter<void>();
  @Output() showCompleted = new EventEmitter<void>();
  @Output() showUncompleted = new EventEmitter<void>();

  onDeleteItem(id: number): void {
    this.deleteEvent.emit(id)
  }

  onCompleteItem(id: number): void {
    this.completeEvent.emit(id)
  }

  onShowAllItems(id: number): void {
    this.showAll.emit(id)
  }

  onShowCompleted(id: number): void {
    this.showCompleted.emit(id)
  }

  onShowUncompleted(id: number): void {
    this.showCompleted.emit(id)
  }
}
