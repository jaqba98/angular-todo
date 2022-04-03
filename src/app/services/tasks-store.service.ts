import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel, TaskStoreModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {
  private tasks$: BehaviorSubject<Array<TaskModel>> = new BehaviorSubject<Array<TaskModel>>([
    { id: '0', title: 'Learn Angular', createDate: new Date(), done: false },
    { id: '1', title: 'Do homework', createDate: new Date(), done: false },
    { id: '2', title: 'Do shopping', createDate: new Date(), doneDate: new Date(), done: true } 
  ]);

  test$: BehaviorSubject<string> = new BehaviorSubject<string>('test');

  getTasks(): Observable<Array<TaskModel>> {
    return this.tasks$;
  }

  addTask(newTask: TaskModel): void {
  }
}
