import {Injectable} from '@angular/core';
import {ICourses} from './ICourses';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseItemService {

  private dataJ = '/assets/data/generated.json';

  constructor(private http: HttpClient) {
  }


  getCourseItem(): Observable<ICourses[]> {
    return this.http.get<ICourses[]>(this.dataJ);
  }
}
