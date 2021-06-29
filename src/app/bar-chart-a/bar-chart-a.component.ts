import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-a',
  templateUrl: './bar-chart-a.component.html',
  styleUrls: ['./bar-chart-a.component.scss'],
})
export class BarChartAComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  barChartLabels: Label[] = ['', '', '', ''];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [pluginDataLabels];

  barChartData: ChartDataSets[] = [
    { data: [4, 11, 65, 75], label: 'Best Fruits' },
  ];

  public barChartColors = [
    { backgroundColor: ['#E1A83E', '#F1C888', '#F9DEB7', '#FBE9CF'] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
