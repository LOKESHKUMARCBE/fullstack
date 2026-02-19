import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  studentName: string = 'Arun';
  marks: number = 89;
  result: string = '';

  calculateResult(): void {
    if (this.marks >= 40) {
      this.result = 'Pass';
    } else {
      this.result = 'Fail';
    }
  }

}
