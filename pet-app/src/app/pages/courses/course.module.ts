import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursePageComponent} from './course-page.component';
import {SearchComponent} from './search-and-add/search/search.component';
import {CourseListComponent} from './course-list/course-list.component';
import {LoadmoreComponent} from './loadmore/loadmore.component';
import {CourseListService} from './course-list/course-list.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CrsDetailComponent} from './course-list/crs-detail/crs-detail.component';
import { ActualizationCrsDirective } from './course-list/crs-detail/actualization-crs.directive';
import { CourseLoadDirective } from './loadmore/course-load.directive';
import { RateDirective } from './course-list/crs-detail/rate.directive';
import { DurationPipe } from './course-list/crs-detail/duration.pipe';
import { FilterPipe } from './search-and-add/search/filter.pipe';
import {DataSharingService} from './data-sharing.service';
import { SortingPipe } from './course-list/sorting.pipe';
import { ActionsComponent } from './search-and-add/actions.component';
import { AddMoreComponent } from './search-and-add/add-new-course/add-more.component';
import { NewCourseComponent } from './search-and-add/add-new-course/new-course/new-course.component';
import { DurationComponent } from './search-and-add/add-new-course/new-course/duration/duration.component';
import { DateComponent } from './search-and-add/add-new-course/new-course/date/date.component';


@NgModule({
  declarations: [
    CoursePageComponent,
    SearchComponent,
    CourseListComponent,
    LoadmoreComponent,
    CrsDetailComponent,
    ActualizationCrsDirective,
    CourseLoadDirective,
    RateDirective,
    DurationPipe,
    FilterPipe,
    SortingPipe,
    ActionsComponent,
    AddMoreComponent,
    NewCourseComponent,
    DurationComponent,
    DateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CoursePageComponent,
  ],
  providers: [CourseListService, ActualizationCrsDirective, DataSharingService]
})
export class CourseModule {
}
