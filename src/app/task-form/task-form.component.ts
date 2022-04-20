import { Component, EventEmitter, Output } from '@angular/core';
import { TasksStoreService } from '../services/tasks-store.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskTitle: string;

  @Output()
  hide = new EventEmitter<boolean>();

  constructor(private readonly tasksStoreSrv: TasksStoreService) {}

  addNewTask(): void {
    if (this.newTaskIsEmpty(this.taskTitle)) {
      this.hide.emit(false);
      return;
    }
    this.tasksStoreSrv.addTask(this.taskTitle);
    this.taskTitle = '';
    this.hide.emit(true);
  }

  private newTaskIsEmpty(taskTitle: string): boolean {
    return taskTitle === undefined || taskTitle === null || taskTitle === '';
  }
}