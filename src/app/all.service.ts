import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AllService {

  constructor(private http: Http) { }

  getRAll() {
    return this.http.get(`https://www.reddit.com/r/all.json`);
  }

  getRAskreddit() {
    return this.http.get(`https://www.reddit.com/r/askreddit.json`);
  }

  getRLifeprotips() {
    return this.http.get(`https://www.reddit.com/r/lifeprotips.json`);
  }

  getRReddevils() {
    return this.http.get(`https://www.reddit.com/r/reddevils.json`);
  }
}
