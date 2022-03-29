import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly taskToDoTitle: string = 'Tasks to do';
  readonly taskDoneTitle: string = 'Tasks done';

  readonly toDoTasks: Array<string> = ['1', '2', '3'];
  readonly doneTasks: Array<string> = ['4', '5'];
}
