import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toggle-tabs',
  templateUrl: './toggle-tabs.component.html',
  styleUrls: ['./toggle-tabs.component.css']
})

export class ToggleTabsComponent {
  // dataTabs =['Pemasukan','Pengeluaran' ]
  @Input() dataTabs: string[] = [];
  isActive = 'Pemasukan'
  constructor(private router: Router) {}


  onClick(item:string){
    console.log("<<<<<< masuk ",item)
    this.isActive=item
    if(this.isActive=="Pengeluaran"){
      this.router.navigate(['/pemasukan']);
    }else{
      this.router.navigate(['/pengeluaran'])
    }

  }
}
