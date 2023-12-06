import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() title: String = '';
  @Input() backArrow: Boolean | undefined = true;
  @Input() backgroundColor: String | undefined = "#F9F9F9"

  constructor(private location: Location) {
    this.title = "Default"
  }

  goBack():void {
    this.location.back()
  }
}
