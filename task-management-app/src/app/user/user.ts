import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { required } from '@angular/forms/signals';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return '/assets/users/' + this.avatar;
  }

  onSelectedUser() {}
}

/* Using Signals and Computed 
selectedUser = signal(DUMMY_USERS[randomIndex]);
imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);

get selectedUserImage() {
  return '/assets/users/' + this.selectedUser().avatar;
}

onUserClick() {
  const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  this.selectedUser.set(DUMMY_USERS[randomIndex]);
 */
