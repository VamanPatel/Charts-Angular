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
  chartData: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.chartData = {
      type: 'gauge',
      data: {
        datasets: [
          {
            data: [1, 2, 3, 4],
            backgroundColor: ['green', 'yellow', 'orange', 'red'],
          },
        ],
      },
      options: {
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: 'rgba(0, 0, 0, 1)',
        },
        valueLabel: {
          display: true,
          formatter: (value) => {
            return '$' + Math.round(value);
          },
          color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          borderRadius: 5,
          padding: {
            top: 10,
            bottom: 10,
          },
        },
      },
    };

    new Chart(this.ctx, this.chartData);
  }

  constructor() {}

  ngOnInit(): void {}
}
