import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import CourseServiceClient from './services/course.service.client';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import ModuleServiceClient from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';


@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    WhiteBoardComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
