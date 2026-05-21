import { Component, inject, Input } from '@angular/core';
import { TaskType } from './task.model';
import { DatePipe } from '@angular/common';
import { Card } from '../../ui/card/card';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
