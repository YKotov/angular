import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursePageComponent} from './course-page.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {CourseContentComponent} from './course-list/course-content.component';
import {LoadmoreComponent} from './loadmore/loadmore.component';
import {CourseItemService} from './course-list/course-item.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseContentComponent,
    LoadmoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Input,
    FormsModule
  ],
  exports: [
    CoursePageComponent
  ],
  providers: [CourseItemService]
})
export class CourseModule {
}
