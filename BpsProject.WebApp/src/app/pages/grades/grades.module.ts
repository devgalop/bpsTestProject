import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';
import { GradeComponent } from './grade/grade.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { UpdateGradeComponent } from './update-grade/update-grade.component';


@NgModule({
  declarations: [
    GradesComponent,
    GradeComponent,
    UpdateGradeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GradesRoutingModule,
    MaterialModule
  ]
})
export class GradesModule { }
