import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReddevilsService {

  constructor(private http: Http) { }

  getPost() {
    return this.http.get(`https://www.reddit.com/r/reddevils.json`);
  }
}
