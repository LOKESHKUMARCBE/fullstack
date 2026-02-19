import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { id: 1, name: 'Arun', course: 'Angular' },
    { id: 2, name: 'Divya', course: 'React' },
    { id: 3, name: 'Kiran', course: 'Vue' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id === id);
  }
}
