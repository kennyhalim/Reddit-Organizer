import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [UserinfoService]
})
export class WelcomeComponent implements OnInit {
  title = 'Reddit Organizer';
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  
  constructor(private router: Router, private userInfoService: UserinfoService) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

}
