import { Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket';
import { SummaryComponent } from './summary/summary';

export const routes: Routes = [
  { path: '', component: TicketComponent },
  { path: 'summary', component: SummaryComponent }
];
