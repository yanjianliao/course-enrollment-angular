import {RouterModule, Routes} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
