import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() title: string;
  @Input() tasks: Array<TaskModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
