import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserinfoService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUser() {
    return this.users;
  }

  getFirstUser() {
    return this.database.object('users/' + 0);
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }

  updateUser(localUpdatedUser) {
    const userEntryInFirebase = this.getFirstUser();
    userEntryInFirebase.update({userName: localUpdatedUser.userName});
  }
}
