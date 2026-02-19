import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { EmployeeComponent } from './employee.component';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'employee', component: EmployeeComponent }
];
