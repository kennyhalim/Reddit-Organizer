import { Component } from '@angular/core';
import { UserInfo } from '../model/userInfo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit Organizer';

  testUser: UserInfo;


  submitFormUser(userName: string) {
    this.testUser = new UserInfo(userName, ['reddevils', 'soccer'], 1);
    this.testUser.loggedIn = true;
    console.log(this.testUser.loggedIn);
  }
}
