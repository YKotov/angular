import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SearchComponent} from './search/search.component';
import {AddMoreComponent} from './add-more/add-more.component';
import {CourseContentComponent} from './course-content/course-content.component';
import {HttpClientModule} from '@angular/common/http';
import {CourseItemService} from './course-item.service';
import {LoadmoreComponent} from './loadmore/loadmore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursePageComponent,
    BreadcrumbsComponent,
    SearchComponent,
    AddMoreComponent,
    CourseContentComponent,
    LoadmoreComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CourseItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
