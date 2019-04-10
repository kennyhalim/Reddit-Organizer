import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';
import { Router } from '@angular/router';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserinfoService]
})
export class AccountComponent implements OnInit {
  title = 'Your Account';
  users: FirebaseListObservable<any[]>;
  testUser;

  constructor(private router: Router, private userInfoService: UserinfoService) {}

  ngOnInit() {
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

}
