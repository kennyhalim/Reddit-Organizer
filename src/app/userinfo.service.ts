import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.model';
import { USERS } from './mock-userinfos';
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
}
