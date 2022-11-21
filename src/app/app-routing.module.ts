import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path : '',
   loadChildren : () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'feed',
    loadChildren : () => import( './feed/feed.module').then(m => m.FeedModule)
  },
  {
    path : 'newquestion',
    loadChildren : () => import ('./new-question/new-question.module').then(m => m.NewQuestionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
