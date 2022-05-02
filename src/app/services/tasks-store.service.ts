import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
/* Store to manage all tasks */
export class TasksStoreService {
  private tasks$: BehaviorSubject<Array<TaskModel>> = new BehaviorSubject<Array<TaskModel>>([]);

  getTasks(): Observable<Array<TaskModel>> {
    return this.tasks$;
  }

  addTask(title: string): void {
    const lastTasks: Array<TaskModel> = this.tasks$.value;
    lastTasks.push({id: uuidv4(), title, createDate: new Date(), done: false});
    this.tasks$.next(lastTasks);
  }

  removeTask(id: string): void {
    const currentTasks: Array<TaskModel> = this.tasks$.value.filter(task => task.id !== id);
    this.tasks$.next(currentTasks);
  }

  finishTask(id: string): void {
    const currentTasks: Array<TaskModel> = this.tasks$.value.map(
      task => task.id === id ? { ...task, doneDate: new Date(), done: true } : task
    );
    this.tasks$.next(currentTasks);
  }
}
