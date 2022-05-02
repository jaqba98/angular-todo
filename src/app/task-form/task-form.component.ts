import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksStoreService } from '../services/tasks-store.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output()
  formError = new EventEmitter<boolean>();

  taskTitle: string;

  constructor(private readonly tasksStore: TasksStoreService) {}

  ngOnInit(): void {
    this.clearTaskTitle();
  }

  addNewTask(): void {
    if (this.taskTitle === '') {
      this.formError.emit(true);
      return;
    }
    this.tasksStore.addTask(this.taskTitle);
    this.clearTaskTitle();
    this.formError.emit(false);
  }

  private clearTaskTitle(): void {
    this.taskTitle = '';
  }
}
