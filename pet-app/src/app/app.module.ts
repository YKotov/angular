import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {CourseModule} from './pages/courses/course.module';
import {LoginModule} from './pages/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
