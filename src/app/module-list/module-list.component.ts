import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import ModuleServiceClient from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private moduleService: ModuleServiceClient) {
    this.route.params.subscribe(
      params => this.onParamsChange(params)
    );
  }

  courseId: number;
  modules = [];
  params;

  ngOnInit() {
  }

  onParamsChange(params) {

    this.params = params;
    this.findModulesForCourse(params.courseId);
  }

  findModulesForCourse(courseId) {
    this.courseId = courseId;
    this.moduleService.findModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }


}
