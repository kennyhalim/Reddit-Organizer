import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserinfoService {
  users: FirebaseListObservable<any[]>;
  subreddits: FirebaseListObservable<any[]>;
  userSubs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
    this.subreddits = database.list('subreddits');
    this.userSubs = database.list('users/' + 0 + '/subreddit');
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

  getUserSubs() {
    return this.database.object('users/' + 0 + '/subreddit');
  }

  updateUser(localUpdatedUser) {
    const userEntryInFirebase = this.getFirstUser();
    userEntryInFirebase.update({userName: localUpdatedUser.userName});
  }

  deleteSub(localSubToDelete) {
    const userEntryInFirebase = this.getFirstUser();
    this.database.object('/users/' + 0 + '/subreddit/' + localSubToDelete).remove();
  }

  addSub(localSubToAdd) {
    const userEntryInFirebase = this.getUserSubs();
    this.userSubs.push({name: localSubToAdd});
  }
}
