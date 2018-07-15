import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import TopicServiceClient from '../services/topic.service.client';

@Component({
  selector: 'app-topic-lists',
  templateUrl: './topic-lists.component.html',
  styleUrls: ['./topic-lists.component.css']
})
export class TopicListsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private topicService: TopicServiceClient) {

    this.route.params.subscribe(
      params => {
        this.setParams(params);
      }
    );


  }

  params;
  courseId: number;
  moduleId: number;
  lessonId: number;
  topics = [];

  ngOnInit() {
  }


  setParams(params) {
    this.params = params;
    this.courseId = params.courseId;
    this.moduleId = params.moduleId;
    this.lessonId = params.lessonId;
    if (!this.lessonId) {return; }

    this.loadTopics();
  }

  loadTopics() {
    this.topicService
      .findTopicsForLesson(this.courseId, this.moduleId, this.lessonId)
      .then(topics => this.topics = topics);

  }


}
