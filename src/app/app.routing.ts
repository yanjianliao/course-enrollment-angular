import {RouterModule, Routes} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  { path: '**', component: WhiteBoardComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
