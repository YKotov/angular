import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursePageComponent} from './course-page.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {CourseListComponent} from './course-list/course-list.component';
import {LoadmoreComponent} from './loadmore/loadmore.component';
import {CourseListService} from './course-list/course-list.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CrsDetailComponent} from './course-list/crs-detail/crs-detail.component';
import { ActualizationCrsDirective } from './course-list/crs-detail/actualization-crs.directive';
import { CourseLoadDirective } from './loadmore/course-load.directive';
import { RateDirective } from './course-list/crs-detail/rate.directive';


@NgModule({
  declarations: [
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseListComponent,
    LoadmoreComponent,
    CrsDetailComponent,
    ActualizationCrsDirective,
    CourseLoadDirective,
    RateDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CoursePageComponent,
  ],
  providers: [CourseListService, ActualizationCrsDirective]
})
export class CourseModule {
}
