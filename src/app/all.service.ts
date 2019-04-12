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

  getRMarvelstudios() {
    return this.http.get(`https://www.reddit.com/r/marvelstudios.json`);
  }

  getRMovies() {
    return this.http.get(`https://www.reddit.com/r/movies.json`);
  }

  getRNba() {
    return this.http.get(`https://www.reddit.com/r/nba.json`);
  }

  getRReddevils() {
    return this.http.get(`https://www.reddit.com/r/reddevils.json`);
  }

  getRShowerthoughts() {
    return this.http.get(`https://www.reddit.com/r/showerthoughts.json`);
  }

  getRSoccer() {
    return this.http.get(`https://www.reddit.com/r/soccer.json`);
  }

  getRTifu() {
    return this.http.get(`https://www.reddit.com/r/tifu.json`);
  }

  getRTil() {
    return this.http.get(`https://www.reddit.com/r/todayilearned.json`);
  }
}
