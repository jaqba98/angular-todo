import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
