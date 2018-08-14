import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Course} from '../../../models/course';

@Injectable()
export class CourseListService {

  private dataJ = '/assets/data/generated.json';

  constructor(private http: HttpClient) {
  }


  getCourseItem(): Observable<Course[]> {
    return this.http.get<Course[]>(this.dataJ);
  }
}
