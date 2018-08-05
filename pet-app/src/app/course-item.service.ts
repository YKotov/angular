import {Injectable} from '@angular/core';
import {Courses} from './courses';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseItemService {

  private dataJ = '/assets/data/generated.json';

  constructor(private http: HttpClient) {
  }


  getCourseItem(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.dataJ);
  }
}
