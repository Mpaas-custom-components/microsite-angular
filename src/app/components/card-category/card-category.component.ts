import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent {
  constructor(private router: Router) {}
  navigateToNextPage() {
    this.router.navigate(['/breakdown']); // Navigasi ke '/next' (sesuaikan dengan path yang sesuai)
  }
}
