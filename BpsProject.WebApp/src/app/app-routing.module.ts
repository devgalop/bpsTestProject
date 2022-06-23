import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'grades', loadChildren: () => import('./pages/grades/grades.module').then(m => m.GradesModule) },
  { path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
