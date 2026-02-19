import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.html'
})
export class SummaryComponent {

  data: any;

  constructor() {
    this.data = history.state.formData;
  }
}
