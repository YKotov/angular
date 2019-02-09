import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursePageComponent} from '../pages/courses/course-page.component';
import {NotFoundComponent} from '../pages/not-found/not-found.component';

const routes: Routes = [
  // { path: '/', component: CrisisListComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RouteRoutingModule { }
