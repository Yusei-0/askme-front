import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { PreguntaComponent } from './components/pregunta/pregunta.component';


@NgModule({
  declarations: [
    FeedComponent,
    PreguntaComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ]
})
export class FeedModule { }
