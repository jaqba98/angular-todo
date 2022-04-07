import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

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
    const tasks: Array<TaskModel> = this.tasks$.value;
    tasks.push(newTask);
    this.tasks$.next(tasks);
  }

  removeTask(taskId: string): void {
    const taksList: Array<TaskModel> = this.tasks$.value.filter(task => task.id !== taskId);
    this.tasks$.next(taksList);
  }

  finishTask(taskId: string): void {
    const taksList: Array<TaskModel> = this.tasks$.value.map(task => task.id === taskId ?
      { ...task, done: true } : task
    );
    this.tasks$.next(taksList);
  }
}