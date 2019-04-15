import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { AllService } from '../all.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserinfoService, AllService]
})
export class WelcomeComponent implements OnInit {
  title = 'Reddit Organizer';
  users: FirebaseListObservable<any[]>;
  posts: any[] = null;
  testUser;
  objectKeys = Object.keys;
  objectToDisplay;

  constructor(private router: Router, private userInfoService: UserinfoService, private allService: AllService) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
    this.userInfoService.getUserSubs().subscribe(dataLastEmittedFromObserver => {
     this.objectToDisplay = dataLastEmittedFromObserver;
     console.log(this.objectToDisplay);
   });
  }

  getPost(sub) {
    this.allService.getR(sub).subscribe(response => {
      this.posts = response.json();
    });
  }
}
