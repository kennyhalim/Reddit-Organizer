import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReddevilsService } from '../reddevils.service';

@Component({
  selector: 'app-reddevils',
  templateUrl: './reddevils.component.html',
  styleUrls: ['./reddevils.component.css'],
  providers: [ReddevilsService]
})
export class ReddevilsComponent implements OnInit {
  posts: any[] = null;
  constructor(private reddevilsService: ReddevilsService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.reddevilsService.getPost().subscribe(response => {
      this.posts = response.json();
    });
  }
}
