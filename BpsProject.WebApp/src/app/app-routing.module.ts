import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule) },
  { path: 'grades', loadChildren: () => import('./pages/grades/grades.module').then(m => m.GradesModule) },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
