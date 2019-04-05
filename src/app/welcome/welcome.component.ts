import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../userInfo.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Reddit Organizer';
  testUser = new UserInfo('Test', ['funny', 'soccer'], 1);

  // submitFormUser(userName: string) {
  //   // console.log(this.testUser.userName);
  //   // console.log(this.testUser.userName.length);
  //   this.testUser =
  //   this.testUser.loggedIn = true;
  //   console.log(this.testUser.loggedIn);
  // }
  constructor() { }

  ngOnInit() {
  }

}
