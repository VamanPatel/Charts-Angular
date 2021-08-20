import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrooll',
  templateUrl: './scrooll.component.html',
  styleUrls: ['./scrooll.component.scss'],
})
export class ScroollComponent implements OnInit {
  number = [];

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.number.push(i);
    }
  }

  ngOnInit(): void {}

  getNextBatch(event) {
    console.log(event);
    if (event === 96) {
      alert('100');
    }
  }
  onScroll() {
    console.log('scrolled!!');
  }
}
