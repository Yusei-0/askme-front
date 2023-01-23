import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path : '',
   loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'feed',
    loadChildren : () => import( './pages/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path : 'newquestion',
    loadChildren : () => import ('./pages/new-question/new-question.module').then(m => m.NewQuestionModule)
  },
  {
    path : 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
