import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

bootstrapApplication(App).catch((err) => console.error(err));

// Root injector for TasksService, so the same instance is shared across the app and all its components
// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(App, {
//   providers: [TasksService],
// }).catch((err) => console.error(err));
