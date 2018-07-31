import { Component, OnInit } from '@angular/core';
import UserServiceClient from '../services/user.service.client';
import {Router} from '@angular/router';
import SectionServiceClient from '../services/section.service.client';
import {User} from '../models/user.model.client';
import CourseServiceClient from '../services/course.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  user = new User();
  sections = [];
  courses = [];


  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {

    this.userService
      .profile()
      .then(user => {
        if (user.error) {
          this.router.navigate(['login']);
          return;
        }
        this.user = user;
      });
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



  logout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['login']));
  }

  updateProfile() {
    this.userService
      .updateProfile(this.user)
      .then(() => alert('Updated!'));
  }


  dropSection(enrollment) {
    console.log(enrollment.student, enrollment.section._id);

    const temp = {
      student: enrollment.student,
      section: enrollment.section._id
    };
    this.sectionService
      .dropSection(temp)
      .then(() => {
        alert('Dropped!');
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
      });
  }

  deleteProfile() {
    this.userService.deleteProfile(this.user)
      .then(() => {
        alert('Deleted!');
        this.loadProfile();
      });
  }

}
