// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';

// bootstrapApplication(App).catch((err) => console.error(err));

// Root injector for TasksService, so the same instance is shared across the app and all its components
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { TasksService } from './app/tasks/tasks.service';
import { InjectionToken } from '@angular/core';

export const TasksServiceToken = new InjectionToken<TasksService>('task-service-token');

bootstrapApplication(App, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err));
