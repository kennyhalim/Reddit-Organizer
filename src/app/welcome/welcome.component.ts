import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Reddit Organizer';
  testUser = new UserInfo('', [ ], 1);

  submitFormUser(userName: string) {
    // console.log(this.testUser.userName);
    // console.log(this.testUser.userName.length);
    this.testUser = new UserInfo(userName, ['reddevils', 'soccer'], 1);
    this.testUser.loggedIn = true;
    console.log(this.testUser.loggedIn);
  }
  constructor() { }

  ngOnInit() {
  }

}
