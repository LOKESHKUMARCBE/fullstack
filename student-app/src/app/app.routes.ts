import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students';
import { StudentDetailComponent } from './student-detail/student-detail';

export const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailComponent }
];
