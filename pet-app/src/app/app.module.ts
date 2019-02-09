import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {BreadcrumbsComponent} from './core/header/breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './core/footer/footer.component';
import {CourseModule} from './pages/courses/course.module';
import {LoginModule} from './pages/login/login.module';
import {RouteModule} from './route/route.module'
import {CoursePageComponent} from "./pages/courses/course-page.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    LoginModule,
    RouteModule
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
}
