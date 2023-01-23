import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewQuestionRoutingModule } from './new-question-routing.module';
import { NewQuestionComponent } from './new-question.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  declarations: [
    NewQuestionComponent
  ],
  imports: [
    CommonModule,
    NewQuestionRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class NewQuestionModule { }
