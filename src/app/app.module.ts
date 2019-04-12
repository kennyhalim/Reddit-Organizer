import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SubredditComponent } from './subreddit/subreddit.component';
import { ReddevilsComponent } from './reddevils/reddevils.component';
import { AccountComponent } from './account/account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { HttpModule } from '@angular/http';
import { AllComponent } from './all/all.component';
import { AskredditComponent } from './askreddit/askreddit.component';
import { LifeprotipsComponent } from './lifeprotips/lifeprotips.component';
import { MarvelstudiosComponent } from './marvelstudios/marvelstudios.component';
import { MoviesComponent } from './movies/movies.component';
import { NbaComponent } from './nba/nba.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    SubredditComponent,
    ReddevilsComponent,
    AccountComponent,
    EditAccountComponent,
    AllComponent,
    AskredditComponent,
    LifeprotipsComponent,
    MarvelstudiosComponent,
    MoviesComponent,
    NbaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
