import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskToDoTitle: string = 'Tasks to do';
  taskDoneTitle: string = 'Tasks done';

  toDoTasks: Array<string> = ['1', '2', '3'];
  doneTasks: Array<string> = ['4', '5'];
}
