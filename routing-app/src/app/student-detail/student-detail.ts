import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-detail.html'
})
export class StudentDetailComponent {

  studentId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.studentId = this.route.snapshot.paramMap.get('id');
  }
}
