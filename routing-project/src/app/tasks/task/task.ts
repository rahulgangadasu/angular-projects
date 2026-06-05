import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type TaskModel } from './task.model';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css',
  imports: [DatePipe, Card],
})
export class Task {
  task = input.required<TaskModel>();
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
  }
}
