import { Routes } from '@angular/router';

import { NoTask } from './tasks/no-task/no-task';
import { resolveTitle, resolveUserName, UserTasks } from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    loadChildren: () => import('./users/users.routes').then((m) => m.routes),
    data: {
      message: 'Hello Angular Developer!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFound,
  },
];
