import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css'],
  providers: [UserinfoService]
})
export class SubredditComponent implements OnInit {
  title = 'Reddit Organizer';
  users: FirebaseListObservable<any[]>;
  testUser;

  constructor(private router: Router, private userInfoService: UserinfoService) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  goToDetailPage(clickedSub) {
  }

}
