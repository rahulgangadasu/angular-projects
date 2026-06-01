import { Component, signal } from '@angular/core';
import { TaskItem } from './task-item/task-item';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  selectedFilter = signal<string>('all');
  tasks = [];

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
