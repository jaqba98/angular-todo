import { Component, Input } from '@angular/core';
import { find, map, Observable } from 'rxjs';
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

  remove(taskId: string): void {
    this.tasksStore.removeTask(taskId);
  }

  done(taskId: string): void {
    this.tasksStore.getTasks().pipe(
      map(taskList => taskList.find(task => task.id === taskId))
    ).subscribe(task => {
      console.log(task);
    }).unsubscribe();
  }
}
