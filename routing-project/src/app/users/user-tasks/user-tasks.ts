import { Component, inject, input } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  userName = input.required<string>();
  message = input.required<string>(); // fetching static data from the routes

  // private activatedRoute = inject(ActivatedRoute);
  // private usersService = inject(UsersService);
  // private destroyRef = inject(DestroyRef);

  // ngOnInit(): void {
  //   // console.log(this.activatedRoute);
  //   console.log('User Message : ', this.message());
  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) => {
  //       this.userName =
  //         this.usersService.users.find((user) => user.id === paramMap.get('userId'))?.name || '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  const usersServices = inject(UsersService);
  return (
    usersServices.users.find((user) => user.id === activatedRoute.paramMap.get('userId'))?.name ||
    ''
  );
};

export const resolveTitle: ResolveFn<string> = (activatedRoute, routerState) => {
  return resolveUserName(activatedRoute, routerState) + ' - Tasks';
};

/*--------extracting data from routes using withComponentInputBinding() as providerRouter(routes, withComponentInputBinding())
userId = input.required<string>();
private userService = inject(UsersService);

userName = computed(() => this.userService.users.find((user) => user.id === this.userId())?.name);*/
