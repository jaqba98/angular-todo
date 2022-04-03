import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

  removeTask(taskId: string): void {
    this.getTasks().pipe(
        map(taskList => taskList.filter(task => task.id !== taskId))
      )
      .subscribe(taskList => this.tasks$.next(taskList))
      .unsubscribe();
  }

  updateTask(task: TaskModel): void {

  }
}
