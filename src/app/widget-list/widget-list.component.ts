import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import WidgetServiceClient from '../services/widget.service.client';
import {p} from '@angular/core/src/render3';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private widgetService: WidgetServiceClient) {
    this.route.params.subscribe(
      params => this.setParams(params)
    );


  }

  params;
  widgets = [];

  ngOnInit() {
  }

  setParams(params) {
    if (!params.topicId) {
      return;
    }
    this.params = params;
    this.loadWidgets(params.topicId);
  }

  loadWidgets(topicId) {
    this.widgetService
      .findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }


}
