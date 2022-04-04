import { Component } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { TasksStoreService } from '../services/tasks-store.service';
import { v4 as uuidv4 } from 'uuid';

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
      id: uuidv4(),
      title: this.taskTitle,
      createDate: new Date(),
      done: false
    }
    this.taskTitle = '';
    this.tasksStoreSrv.addTask(newTask);
  }
}
