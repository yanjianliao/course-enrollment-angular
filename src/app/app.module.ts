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
import { RegisterComponent } from './register/register.component';
import UserServiceClient from './services/user.service.client';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import SectionServiceClient from './services/section.service.client';
import { TopicListsComponent } from './topic-lists/topic-lists.component';
import TopicServiceClient from './services/topic.service.client';


@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    WhiteBoardComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SectionListComponent,
    TopicListsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    UserServiceClient,
    TopicServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
