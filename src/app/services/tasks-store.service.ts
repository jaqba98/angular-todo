import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel, TaskStoreModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {
  private tasks: TaskStoreModel = {
    task0: { id: '0', title: 'Learn Angular <3', createDate: new Date(), done: false },
    task1: { id: '1', title: 'Do homework', createDate: new Date(), done: false },
    task2: { id: '2', title: 'Do shopping', createDate: new Date(), doneDate: new Date(), done: true }
  };

  getTasks(): Array<TaskModel> {
    return Object.values(this.tasks);
  }
}
