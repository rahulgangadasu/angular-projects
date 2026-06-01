import { Component } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { TasksList } from './tasks-list/tasks-list';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TasksList, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  providers: [TasksService], //Element injector for TasksService,
  // and it will be available for all child components of Tasks component (NewTask and TasksList)
  //Element injector works on only one instance of the service
})
export class Tasks {}
