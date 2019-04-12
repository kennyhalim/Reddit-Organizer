import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';
import { Observable } from 'rxjs/Observable';
import { UserinfoService } from '../userinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marvelstudios',
  templateUrl: './marvelstudios.component.html',
  styleUrls: ['./marvelstudios.component.css'],
  providers: [AllService, UserinfoService]
})
export class MarvelstudiosComponent implements OnInit {
  posts: any[] = null;
  users: FirebaseListObservable<any[]>;
  testUser;
  objectKeys = Object.keys;
  constructor(private marvelstudiosService: AllService, private userInfoService: UserinfoService) { }

  ngOnInit() {
    this.getPost();
    this.users = this.userInfoService.getUser();
    this.testUser = this.userInfoService.getFirstUser();
  }

  getPost() {
    this.marvelstudiosService.getRMarvelstudios().subscribe(response => {
      this.posts = response.json();
    });
  }

}
