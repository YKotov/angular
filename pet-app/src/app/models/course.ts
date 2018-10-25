import {ICourses} from './ICourses';


export class Course implements ICourses {
  constructor(
    public _id = 0,
    public index = 0,
    public title = '',
    public data = '',
    public duration = 0,
    public description = '',
    public rate = false,
  ) {}
}
