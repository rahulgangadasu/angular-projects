import { Component } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { TasksList } from './tasks-list/tasks-list';

@Component({
  selector: 'app-tasks',
  imports: [TasksList, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
