import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }
  onSelectedUser() {
    this.select.emit(this.id);
  }
}

/* 
-----> Component Inputs
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;


------> Using Signals and Computed 
selectedUser = signal(DUMMY_USERS[randomIndex]);
imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);

get selectedUserImage() {
  return '/assets/users/' + this.selectedUser().avatar;
}

onUserClick() {
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]);


------> Using the new input() function, which is a part of Angular's new reactive system,
 you can define component inputs in a more concise way.
avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => '/assets/users/' + this.avatar());


-------> Using the new output() function, you can define component outputs in a more concise way.
  select = output<string>();
 */
