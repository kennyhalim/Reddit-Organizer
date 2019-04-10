import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { ReddevilsComponent } from './reddevils/reddevils.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'subreddits',
    component: SubredditComponent
  },
  {
    path: 'subreddits/reddevils',
    component: ReddevilsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
