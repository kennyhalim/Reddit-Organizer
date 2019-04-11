import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SubredditsService } from '../subreddits.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css'],
  providers: [UserinfoService, SubredditsService]
})
export class SubredditComponent implements OnInit {
  title = 'Reddit Organizer';
  users: FirebaseListObservable<any[]>;
  subreddits: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  // subredditCount = 0;
  // subscribedCount = 0;
  constructor(private router: Router, private userInfoService: UserinfoService, private subredditsService: SubredditsService) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
    this.subreddits = this.subredditsService.getSubreddits();

    }


}
