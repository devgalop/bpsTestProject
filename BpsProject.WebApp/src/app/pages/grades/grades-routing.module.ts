import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeComponent } from './grade/grade.component';
import { GradesComponent } from './grades.component';
import { UpdateGradeComponent } from './update-grade/update-grade.component';

const routes: Routes = [
  { path: '', component: GradesComponent },
  { path: 'add-grade', component: GradeComponent},
  { path: 'update-grade', component: UpdateGradeComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
