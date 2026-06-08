import { Component, inject, input } from '@angular/core';
import { ResolveFn, RouterLink } from '@angular/router';

import { Task } from './task/task';
import { TasksService } from './tasks.service';
import { TaskModel } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, RouterLink],
})
export class Tasks {
  userTasks = input.required<TaskModel[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
}

export const resolveUserTasks: ResolveFn<TaskModel[]> = (activatedRouteSnapshot, routerState) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};

// import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import { combineLatest } from 'rxjs';

// import { Task } from './task/task';
// import { TasksService } from './tasks.service';

// @Component({
//   selector: 'app-tasks',
//   standalone: true,
//   templateUrl: './tasks.html',
//   styleUrl: './tasks.css',
//   imports: [Task, RouterLink],
// })
// export class Tasks implements OnInit {
//   private acivatedRoute = inject(ActivatedRoute);
//   private tasksService = inject(TasksService);
//   private destroyRef = inject(DestroyRef);

//   userId = '';
//   order?: 'asc' | 'desc';

//   // order = input.required<'asc' | 'desc'>();
//   // userId = input.required<string>();
//   ngOnInit(): void {
//     // combineLatest([this.acivatedRoute.paramMap, this.acivatedRoute.queryParams]).subscribe({
//     //   next: ([paramMap, queryParams]) => {
//     //     this.userId = paramMap.get('userId') || '';
//     //     this.order = queryParams['order'];
//     //   },
//     // });

//     const idSubscription = this.acivatedRoute.paramMap.subscribe({
//       next: (paramMap) => {
//         this.userId = paramMap.get('userId') || '';
//       },
//     });
//     const orderSubscription = this.acivatedRoute.queryParams.subscribe({
//       next: (params) => (this.order = params['order']),
//     });

//     this.destroyRef.onDestroy(() => {
//       idSubscription.unsubscribe();
//       orderSubscription.unsubscribe();
//     });
//   }

//   userTasks = computed(() =>
//     this.tasksService.allTasks().filter((task) => task.userId === this.userId),
//   );
// }
