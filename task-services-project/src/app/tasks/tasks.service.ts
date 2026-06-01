import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = { ...taskData, id: Math.random().toString(), status: 'OPEN' };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log(`Added new task: ${newTask.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)),
    );
    this.loggingService.log(`Updated task ${taskId} to status: ${newStatus}`);
  }
}
