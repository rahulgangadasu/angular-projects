import { Component } from '@angular/core';

import { Task } from './task/task';
import { TaskModel } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task],
})
export class Tasks {
  userTasks: TaskModel[] = [];
}
