import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
