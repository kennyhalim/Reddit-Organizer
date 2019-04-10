import { Injectable } from '@angular/core';
import { UserInfo } from './userInfo.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SubredditsService {
  subreddits: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.subreddits = database.list('subreddits');
  }

  getSubreddits() {
    return this.subreddits;
  }
}
