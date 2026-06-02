import { InjectionToken } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export const TASKS_STATUS_OPTIONS = new InjectionToken<
  {
    value: 'open' | 'in-progress' | 'done';
    taskStatus: TaskStatus;
    text: string;
  }[]
>('tasks-status-options');

export const TaskStatusOptions: {
  value: 'open' | 'in-progress' | 'done';
  taskStatus: TaskStatus;
  text: string;
}[] = [
  {
    value: 'open',
    taskStatus: 'OPEN',
    text: 'Open',
  },
  {
    value: 'in-progress',
    taskStatus: 'IN_PROGRESS',
    text: 'Working on it',
  },
  {
    value: 'done',
    taskStatus: 'DONE',
    text: 'Completed',
  },
];

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
