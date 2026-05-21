import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
import { DatePipe } from '@angular/common';
import { Card } from '../../ui/card/card';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
