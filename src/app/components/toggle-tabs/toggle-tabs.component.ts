import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-tabs',
  templateUrl: './toggle-tabs.component.html',
  styleUrls: ['./toggle-tabs.component.css']
})

export class ToggleTabsComponent {
  // dataTabs =['Pemasukan','Pengeluaran' ]
  @Input() dataTabs: string[] = [];
  isActive = 'Pemasukan'


  onClick(item:string){
    console.log("<<<<<< masuk ",item)
    this.isActive=item
  }
}
