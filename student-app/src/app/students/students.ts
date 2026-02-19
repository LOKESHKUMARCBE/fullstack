import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentService } from '../student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class StudentsComponent {

  students: { id: number; name: string; course: string }[] = [];

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }
}
