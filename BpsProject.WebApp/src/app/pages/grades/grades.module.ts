import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';
import { GradeComponent } from './grade/grade.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    GradesComponent,
    GradeComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule,
    MaterialModule
  ]
})
export class GradesModule { }
