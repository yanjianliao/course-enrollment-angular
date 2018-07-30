import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import CourseServiceClient from '../services/course.service.client';
import SectionServiceClient from '../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) { }

  courses = [];
  sectionName: String;
  newSectionName: String;
  seats: Number;
  newSeats: Number;
  selectedSection;

  ngOnInit() {
    this.findAllCourses();
  }

  findAllCourses() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses)
      .then(() => {
        console.log(this.courses);
        for (let i = 0; i < this.courses.length; i++) {
          // this.courses[i].sections
          const courseId = this.courses[i].id;
          this.sectionService
            .findSectionsForCourse(courseId)
            .then(sections => this.courses[i].sections = sections);
        }
      });
  }

  deleteSection(sectionId) {
    this.sectionService
      .deleteSection(sectionId)
      .then(() => this.findAllCourses());
  }

  createSection(courseId) {
    if (!this.sectionName) {
      this.courseService.findCourseById(courseId)
        .then(course => {
          this.sectionService
            .createSection(course.title + ' Section 1', this.seats, courseId)
            .then(() => this.findAllCourses());
        });
      return;
    }
    this.sectionService
      .createSection(this.sectionName, this.seats, courseId)
      .then(() => this.findAllCourses());
  }

  selectSection(section) {
   this.selectedSection = section;
   this.newSectionName = section.name;
   this.newSeats = section.seats;
  }

  updateSection() {
    const newSection = this.selectedSection;
    newSection.name = this.newSectionName;
    newSection.seats = this.newSeats;
    // console.log(newSection, this.newSeats);
    this.sectionService.updateSection(newSection)
      .then(() => this.findAllCourses());

  }


}
