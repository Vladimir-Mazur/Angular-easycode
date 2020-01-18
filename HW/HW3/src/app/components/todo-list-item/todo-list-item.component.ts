import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/components/interfaces/Todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() item: Todo;
  @Output() deleteEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  @Output() showAll = new EventEmitter();
  @Output() showCompleted = new EventEmitter();
  @Output() showUncompleted = new EventEmitter();

  btnText: string = 'Complete'

  constructor() { }

  ngOnInit() {
  }

  deleteItem():void {
    this.deleteEvent.emit(this.item.id)
  }

  completeItem():void {
    if (this.item.isCompleted) {
      this.btnText ='Complete'
    } else {
      this.btnText ='Completed'
    }
    this.completeEvent.emit(this.item.id)
  }

  showAllItems():void {
    this.showAll.emit(this.item.id)
  }

  showCompletedItems():void {
    this.showCompleted.emit(this.item.id)
  }

  showUncompletedItems():void {
    this.showUncompleted.emit(this.item.id)
  }
}
