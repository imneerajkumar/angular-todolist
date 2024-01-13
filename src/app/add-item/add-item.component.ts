import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent {
  title!: string;
  desc!: string;
  @Output() addItem: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo = {
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.addItem.emit(todo);
  }
}
