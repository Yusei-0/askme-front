import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { DialogPreguntaComponent } from './components/dialog-pregunta/dialog-pregunta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogRespuestaComponent } from './components/dialog-respuesta/dialog-respuesta.component';


@NgModule({
  declarations: [
    FeedComponent,
    PreguntaComponent,
    SidenavComponent,
    RightBarComponent,
    DialogPreguntaComponent,
    DialogRespuestaComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeedModule { }
