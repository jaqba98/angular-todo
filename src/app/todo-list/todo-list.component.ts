import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { TasksStoreService } from '../services/tasks-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() header: string;
  @Input() isDone: boolean;

  taskList$: Observable<Array<TaskModel>>;

  constructor(private readonly tasksStore: TasksStoreService) {
    this.taskList$ = this.tasksStore.getTasks().pipe(
      map(taskList => taskList.filter(task => task.done === this.isDone))
    );
  }

  remove(task: TaskModel): void {
    console.log(task);
  }

  done(): void {}
}
