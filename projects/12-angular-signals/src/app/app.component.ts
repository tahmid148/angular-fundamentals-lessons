import {
  Component,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>Building a TODO List</h1>
    <p>Completed Todos: {{ completedTodos() }}</p>
    @for(todo of todos(); track todo){
    <label
      [ngStyle]="{
        'text-decoration': todo.completed ? 'line-through' : 'none'
      }"
      >{{ todo.title }}</label
    >
    <input
      type="checkbox"
      [checked]="todo.completed"
      (change)="updateTodo(todo)"
    />
    }`,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos: WritableSignal<Todo[]> = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  completedTodos = computed(() => {
    return this.todos().reduce((acc, current) => {
      if (current.completed) return acc + 1;
      return acc;
    }, 0);
  });

  updateTodo(todo: Todo) {
    this.todos.update((todoList) => {
      todoList.map((todoEntry) => {
        if (todoEntry === todo) {
          todoEntry.completed = !todo.completed;
        }
      });
      this.todos.set([]); // For some reason, update doesn't notify my computed value, only set seems to work for this
      return todoList;
    });
  }

  ngOnInit() {}
}
