import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AllService } from '../all.service';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-reddevils',
  templateUrl: './reddevils.component.html',
  styleUrls: ['./reddevils.component.css'],
  providers: [AllService, UserinfoService]
})
export class ReddevilsComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private reddevilsService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.reddevilsService.getRReddevils().subscribe(response => {
      this.posts = response.json();
    });
  }
}
