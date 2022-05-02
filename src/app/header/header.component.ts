import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  isError: boolean;

  ngOnInit(): void {
    this.handleFormError(false);
  }

  handleFormError(errorStatus: boolean): void {
    this.isError = errorStatus;
  }
}
