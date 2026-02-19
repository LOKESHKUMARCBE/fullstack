import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.html'
})
export class FeedbackComponent implements OnInit {

  private api = 'http://localhost:3000/feedbacks';

  feedbacks: any[] = [];
  newFeedback = {
    course: '',
    rating: 0,
    comment: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.http.get<any[]>(this.api)
      .subscribe({
        next: (data) => this.feedbacks = data,
        error: (err) => console.error('Error fetching feedbacks', err)
      });
  }

  addFeedback(): void {
    if (!this.newFeedback.course || !this.newFeedback.comment) return;

    this.http.post(this.api, this.newFeedback)
      .subscribe({
        next: () => {
          this.loadData();
          this.newFeedback = { course: '', rating: 0, comment: '' };
        },
        error: (err) => console.error('Error adding feedback', err)
      });
  }

  deleteFeedback(id: number): void {
    this.http.delete(`${this.api}/${id}`)
      .subscribe({
        next: () => this.loadData(),
        error: (err) => console.error('Error deleting feedback', err)
      });
  }
}
