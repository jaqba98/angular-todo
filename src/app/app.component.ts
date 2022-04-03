import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
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
