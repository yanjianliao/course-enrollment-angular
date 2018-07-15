import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private lessonService: LessonServiceClient) {

    this.route.params.subscribe(
      params => this.findLessonsForModule(params)
    );
  }

  params;
  moduleId: number;
  courseId: number;
  lessonId: number;
  lessons = [];

  findLessonsForModule(params) {
    this.params = params;
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    if (!this.moduleId) {
      return;
    }

    this.lessonService.findLessonsForModule(this.courseId, this.moduleId)
      .then(lessons => this.lessons = lessons);
  }


  ngOnInit() {
  }

}
