import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Observable } from 'rxjs/Observable';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-askreddit',
  templateUrl: './askreddit.component.html',
  styleUrls: ['./askreddit.component.css'],
  providers: [AllService, UserinfoService]
})
export class AskredditComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private askredditService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.askredditService.getRAskreddit().subscribe(response => {
      this.posts = response.json();
    });
  }

}
