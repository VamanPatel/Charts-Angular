import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.scss'],
})
export class SwipeComponent implements OnInit {
  hello = window.matchMedia('(max-width: 450px)');
  closeModal: string;

  constructor(private modalService: NgbModal) {
    if (this.hello.matches) {
      console.log('hello');
    }
  }

  ngOnInit(): void {}

  openXl(content) {
    this.modalService.open(content, {
      // size: 'lg',
      centered: true,
      scrollable: true,
    });
  }
}
