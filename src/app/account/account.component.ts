import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SubredditsService } from '../subreddits.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserinfoService, SubredditsService]
})
export class AccountComponent implements OnInit {
  title = 'Your Account';
  users: FirebaseListObservable<any[]>;
  subreddits: FirebaseListObservable<any[]>;
  testUser;
  userSubs;
  editShown = false;
  subToDisplay;

  constructor(private router: Router, private userInfoService: UserinfoService, private subredditsService: SubredditsService ) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
    this.subreddits = this.subredditsService.getSubreddits();
    this.userSubs = this.userInfoService.getUserSubs();
   //  this.userInfoService.getUserSubs().subscribe(dataLastEmittedFromObserver => {
   //   this.subToDisplay = dataLastEmittedFromObserver;
   // })
  }

  editAccount() {
    this.editShown = !(this.editShown);
  }

  deleteSub(sub) {
    if (confirm('Are you sure you want to delete this item from the inventory?')) {
      this.userInfoService.deleteSub(sub);
    }
  }

  addToSubList(sub) {
    this.userInfoService.addSub(sub);
  }


}
