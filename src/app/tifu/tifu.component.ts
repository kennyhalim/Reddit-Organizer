import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Observable } from 'rxjs/Observable';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-tifu',
  templateUrl: './tifu.component.html',
  styleUrls: ['./tifu.component.css'],
  providers: [AllService, UserinfoService]
})
export class TifuComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private tifuService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.tifuService.getRTifu().subscribe(response => {
      this.posts = response.json();
    });
  }

}
