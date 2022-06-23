import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade/grade.component';
import { GradesComponent } from './grades.component';

const routes: Routes = [
  { path: '', component: GradesComponent },
  { path: 'add-grade', component: GradeComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
