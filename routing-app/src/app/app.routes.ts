import { Routes } from '@angular/router';
import { Home} from './home/home';
import { About } from './about/about';
import { StudentDetailComponent } from './student-detail/student-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'student/:id', component: StudentDetailComponent }
];
