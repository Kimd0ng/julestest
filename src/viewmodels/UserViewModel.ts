// src/viewmodels/UserViewModel.ts
import { User } from '../models/User';

export class UserViewModel {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  get id(): number {
    return this.user.id;
  }

  get name(): string {
    return this.user.name;
  }

  get email(): string {
    return this.user.email;
  }

  updateName(newName: string) {
    this.user.name = newName;
    // In a real app, you might trigger an update/event here
  }

  updateEmail(newEmail: string) {
    this.user.email = newEmail;
    // In a real app, you might trigger an update/event here
  }
}
