import {RouterModule, Routes} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'adminPage', component: AdminPageComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  { path: 'course/:courseId/section', component: SectionListComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
