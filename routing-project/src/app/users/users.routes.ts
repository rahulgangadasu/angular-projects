import { Routes } from '@angular/router';

import { resolveUserTasks, Tasks } from '../tasks/tasks';
import { NewTask } from '../tasks/new-task/new-task';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: Tasks,
        // loadComponent: () => import('../tasks/tasks').then((m) => m.Tasks),
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTask,
      },
    ],
  },
];
