import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { TasksStoreService } from '../services/tasks-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() header: string;
  @Input() isDone: boolean;

  taskList$: Observable<Array<TaskModel>>;

  constructor(private readonly tasksStoreService: TasksStoreService) {
  }

  ngOnInit(): void {
    this.taskList$ = this.tasksStoreService.getTasks().pipe(
      map(taskList => taskList.filter(task => task.done === this.isDone).reverse())
    );
  }

  remove(taskId: string): void {
    this.tasksStoreService.removeTask(taskId);
  }

  done(taskId: string): void {
    this.tasksStoreService.finishTask(taskId);
  }
}
