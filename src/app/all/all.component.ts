import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AllService } from '../all.service';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers: [AllService, UserinfoService]
})
export class AllComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private allService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.allService.getPost().subscribe(response => {
      this.posts = response.json();
    });
  }

}
