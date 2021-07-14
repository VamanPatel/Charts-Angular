import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-ui',
  templateUrl: './dropdown-ui.component.html',
  styleUrls: ['./dropdown-ui.component.scss'],
})
export class DropdownUiComponent implements OnInit {
  showHide: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  displayRestFilter() {
    this.showHide = !this.showHide;
  }
}
