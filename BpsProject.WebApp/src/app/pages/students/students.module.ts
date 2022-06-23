import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule
  ]
})
export class StudentsModule { }
