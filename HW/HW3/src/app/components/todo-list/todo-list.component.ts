import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/components/interfaces/Todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() list: Array<Todo>
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  @Output() showAll = new EventEmitter();
  @Output() showCompleted = new EventEmitter();
  @Output() showUncompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem(id:number):void {
    this.deleteEvent.emit(id)
  }

  onCompleteItem(id:number):void {
    this.completeEvent.emit(id)
  }

  onShowAllItems(id:number):void {
    this.showAll.emit(id)
  }

  onShowCompleted(id:number):void {
    this.showCompleted.emit(id)
  }

  onShowUncompleted(id:number):void {
    this.showCompleted.emit(id)
  }
}
