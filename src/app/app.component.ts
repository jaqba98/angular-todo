import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Product } from './models/product';
import { TaskModel } from './models/task.model';
import { TasksStoreService } from './services/tasks-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayTest$: Observable<string>;
  toDoTasks: Observable<Array<TaskModel>>;
  doneTasks: Array<TaskModel>;

  products: Product[] = [
    { id: '', code: 'x', name: 'y', category: 'z', quantity: 1 }
  ];
  
  constructor(private readonly tasksStoreSrv: TasksStoreService) {
    this.displayTest$ = tasksStoreSrv.test$.pipe(
      map(item => item)
    );
    let i = 0;

    setInterval(() => {
      i++;
      tasksStoreSrv.test$.next(i.toString());
    }, 1000);
  }
  
  taskToDoTitle: string = 'Tasks to do';
  taskDoneTitle: string = 'Tasks done';

  // toDoTasks: Array<TaskModel> = this.tasksStoreSrv.getTasks().filter(task => !task.done);
  // doneTasks: Array<TaskModel> = this.tasksStoreSrv.getTasks().filter(task => task.done);
}
