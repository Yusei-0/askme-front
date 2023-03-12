import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatBadgeModule } from "@angular/material/badge";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatToolbarModule ,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
  ],
  exports : [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule, 
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
