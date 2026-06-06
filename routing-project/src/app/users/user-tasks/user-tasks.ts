import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  imports: [],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  private destroyRef = inject(DestroyRef);
  userName = '';

  ngOnInit(): void {
    // console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.usersService.users.find((user) => user.id === paramMap.get('userId'))?.name || '';
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}

/*--------extracting data from routes using withComponentInputBinding() as providerRouter(routes, withComponentInputBinding())
userId = input.required<string>();
private userService = inject(UsersService);

userName = computed(() => this.userService.users.find((user) => user.id === this.userId())?.name);*/
