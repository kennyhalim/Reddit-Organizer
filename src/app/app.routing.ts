import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { ReddevilsComponent } from './reddevils/reddevils.component';
import { AllComponent } from './all/all.component';
import { AskredditComponent } from './askreddit/askreddit.component';
import { AccountComponent } from './account/account.component';
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
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'subreddits/reddevils',
    component: ReddevilsComponent
  },
  {
    path: 'subreddits/all',
    component: AllComponent
  },
  {
    path: 'subreddits/askreddit',
    component: AskredditComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
