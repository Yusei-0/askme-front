import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  exports : [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
