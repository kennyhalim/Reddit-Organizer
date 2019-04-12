import { Component, OnInit } from '@angular/core';
import { AskredditService } from '../askreddit.service';
import { Observable } from 'rxjs/Observable';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-askreddit',
  templateUrl: './askreddit.component.html',
  styleUrls: ['./askreddit.component.css'],
  providers: [AskredditService, UserinfoService]
})
export class AskredditComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private askredditService: AskredditService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.askredditService.getPost().subscribe(response => {
      this.posts = response.json();
    });
  }

}
