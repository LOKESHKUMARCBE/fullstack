import { Component } from '@angular/core';
import { HasRoleDirective } from './has-role';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HasRoleDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentRole = 'admin';

  changeRole(role: string): void {
    this.currentRole = role;
  }
}
