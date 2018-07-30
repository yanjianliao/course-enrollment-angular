import { Component, OnInit } from '@angular/core';
import UserServiceClient from '../services/user.service.client';
import SectionServiceClient from '../services/section.service.client';
import {Router} from '@angular/router';
import CourseServiceClient from '../services/course.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router,
              private courseService: CourseServiceClient
  ) { }

  sections = [];
  user = {error: undefined};
  courses = [];

  ngOnInit() {
    this.findCourses();
  }

  findCourses() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
      }).then(
      () => {
        if (this.user.error) {
          return ;
        }

        this.sectionService
          .findSectionForStudent()
          .then(sections => this.sections = sections)
          .then(
            () => {
              // console.log(this.sections);
              for (let i = 0; i < this.sections.length; i++) {
                this.courseService.findCourseById(this.sections[i].section.courseId)
                  .then(
                    course => {
                      let flag = false;
                      for (let j = 0; j < this.courses.length; j++) {
                        // console.log(this.courses[j], course.title);
                        if (this.courses[j].title === course.title) {
                          flag = true;
                          break;
                        }
                      }
                      if (!flag) {
                        this.courses.push(course);
                      }
                    }
                );
              }
            }
          );
      }
    );

  }


}
