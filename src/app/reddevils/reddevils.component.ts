import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReddevilsService } from '../reddevils.service';

@Component({
  selector: 'app-reddevils',
  templateUrl: './reddevils.component.html',
  styleUrls: ['./reddevils.component.css'],
  providers: [ReddevilsService]
})
export class ReddevilsComponent {
  posts: any[] = null;
  constructor(private reddevilsService: ReddevilsService) { }
  getData() {
    this.reddevilsService.getPost().subscribe(response => {
      this.posts = response.json();
    });
  }

}
