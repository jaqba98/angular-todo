import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() hide: boolean = true;

  err(hide: boolean): void {
    this.hide = hide;
  }
}