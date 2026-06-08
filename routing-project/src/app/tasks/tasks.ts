import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task],
})
export class Tasks implements OnInit {
  private acivatedRoute = inject(ActivatedRoute);
  private tasksService = inject(TasksService);
  userId = '';

  // userId = input.required<string>();
  ngOnInit(): void {
    this.acivatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userId = paramMap.get('userId') || '';
      },
    });
  }

  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => task.userId === this.userId),
  );
}
