import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent {
  fontStyleControl = new FormControl('');
  fontStyle?: string;
  dataTabs=['Pemasukan','Pengeluaran']
  constructor(private router: Router) {}
  // navigate(){
  //   this.router.navigate(['/pemasukan']);
  // }
}
