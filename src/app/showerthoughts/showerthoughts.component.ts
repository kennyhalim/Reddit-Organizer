import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Observable } from 'rxjs/Observable';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-showerthoughts',
  templateUrl: './showerthoughts.component.html',
  styleUrls: ['./showerthoughts.component.css'],
  providers: [AllService, UserinfoService]
})
export class ShowerthoughtsComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private showerthoughtsService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.showerthoughtsService.getRShowerthoughts().subscribe(response => {
      this.posts = response.json();
    });
  }

}
