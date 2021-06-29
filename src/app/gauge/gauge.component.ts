import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'doughnut',

      options: {
        rotation: -Math.PI,
        cutoutPercentage: 30,
        circumference: Math.PI,
        legend: {
          position: 'left',
        },
        animation: {
          animateRotate: false,
          animateScale: true,
        },
      },

      data: {
        labels: [],
        datasets: [
          {
            data: [35, 35, 35],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(63, 191, 63, 0.2)',
            ],
          },
        ],
      },
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
