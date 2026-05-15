import { Component, computed, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => '/assets/users/' + this.avatar());

  onSelectedUser() {}
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
 */
