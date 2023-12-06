import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakdown-category',
  templateUrl: './breakdown-category.component.html',
  styleUrls: ['./breakdown-category.component.css']
})
export class BreakdownCategoryComponent {

  constructor(private router: Router) {
    // document.body.setAttribute("style" , "overflow-y : hidden")
  }

  handleButton():void {
    this.router.navigate(['/'])
    console.log("Masuk")
  }
}
