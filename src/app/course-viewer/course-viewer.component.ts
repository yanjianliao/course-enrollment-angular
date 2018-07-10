import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import CourseServiceClient from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: CourseServiceClient) {
    this.route.params.subscribe(
      params => this.loadCourse(params.courseId)
    );
  }
  course: Course = new Course();

  loadCourse(courseId) {
    this.service.findCourseById(courseId)
      .then(course => this.course = course);
  }



  ngOnInit() {

  }

}
