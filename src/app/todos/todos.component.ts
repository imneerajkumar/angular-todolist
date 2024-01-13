import { Component } from '@angular/core';
import { TodoitemComponent } from '../todoitem/todoitem.component';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoitemComponent, AddItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  localItem: string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  addItem(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleDone(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
