import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ticket.html'
})
export class TicketComponent {

  constructor(private router: Router) {}

  today = new Date().toISOString().split('T')[0];

  ticketForm = new FormGroup({
    customerName: new FormControl('', Validators.required),
    purchaseDate: new FormControl('', Validators.required),
    products: new FormArray([
      new FormControl('', Validators.required)
    ])
  });

  get products() {
    return this.ticketForm.get('products') as FormArray;
  }

  addProduct() {
    this.products.push(new FormControl('', Validators.required));
  }

  removeProduct(i: number) {
    this.products.removeAt(i);
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      this.router.navigate(['/summary'], {
        state: { formData: this.ticketForm.value }
      });
    }
  }
}
