import { Component } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TasksStoreService } from '../services/tasks-store.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskTitle: string;

  constructor(private readonly tasksStoreSrv: TasksStoreService) {}

  addTask(): void {
    const newTask: TaskModel = {
      id: '5',
      title: this.taskTitle,
      createDate: new Date(),
      doneDate: undefined,
      done: false
    }
    this.taskTitle = '';
    this.tasksStoreSrv.addTask(newTask);
  }
}
