import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todoitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css',
})
export class TodoitemComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleDone: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo: Todo) {
    this.toggleDone.emit(todo);
  }
}
