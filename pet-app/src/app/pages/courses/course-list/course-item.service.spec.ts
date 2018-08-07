import { TestBed, inject } from '@angular/core/testing';

import { CourseItemService } from './course-item.service';

describe('CourseItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseItemService]
    });
  });

  it('should be created', inject([CourseItemService], (service: CourseItemService) => {
    expect(service).toBeTruthy();
  }));
});
