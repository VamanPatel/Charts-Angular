import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-b',
  templateUrl: './bar-chart-b.component.html',
  styleUrls: ['./bar-chart-b.component.scss'],
})
export class BarChartBComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 15,
        padding: 20,
      },
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            max: 30,
          },
        },
      ],
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  barChartLabels: Label[] = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', ' Mar', 'Apr'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  // barChartPlugins = [pluginDataLabels];

  barChartData: ChartDataSets[] = [
    {
      data: [5, 4, 5, 4, 5, 4, 7],
      label: 'Referral Receipt to Benefit Verfication',
      backgroundColor: '#08306B',
    },
    {
      data: [11, 13, 11, 11, 13, 12, 14],
      label: 'PA Submission to Decision',
      backgroundColor: ' #08519C',
    },
    {
      data: [2, 4, 4, 2, 3, 2, 3],
      label: 'PA Approval/NPA Decision - Patient Scheduled',
      backgroundColor: ' #2171B5',
    },
    {
      data: [3, 2, 5, 2, 1, 4, 5],
      label: 'Patient Scheduled - Patient on Chair',
      backgroundColor: ' #4292C6',
    },
  ];

  public barChartColors = [{ backgroundColor: '#08306B' }];

  constructor() {}

  ngOnInit(): void {}
}
