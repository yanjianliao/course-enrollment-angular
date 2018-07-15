import { Component, OnInit } from '@angular/core';
import SectionServiceClient from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.setParams(params)
    );
  }

  sectionName: String;
  seats: String;
  courseId: String;
  sections = [];

  ngOnInit() {
  }

  setParams(params) {
    this.courseId = params.courseId;
    this.loadSection();

  }

  loadSection() {
    this.sectionService
      .findSectionsForCourse(this.courseId)
      .then(sections => this.sections = sections);
  }

  createSection() {
    this.sectionService
      .createSection(this.sectionName, this.seats, this.courseId)
      .then(() => this.loadSection());
  }

  enroll(section) {
    this.sectionService
      .enrollStudentInSection(section._id)
      .then(() => this.router.navigate(['profile']));
  }

}
