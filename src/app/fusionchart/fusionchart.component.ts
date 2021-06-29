import { Component, OnInit } from '@angular/core';

const data = {
  chart: {
    caption: 'Pending Referrals Average Age',
    lowerlimit: '0',
    upperlimit: '30',
    showvalue: '6',
    numbersuffix: ' days',
    theme: 'fusion',
    showtooltip: '0',
  },
  data: [],
  colorrange: {
    color: [
      {
        minvalue: '0',
        maxvalue: '7.5',
        code: '#62B58F',
      },
      {
        minvalue: '7.5',
        maxvalue: '15',
        code: '#FFC533',
      },
      {
        minvalue: '15',
        maxvalue: '30',
        code: '#F2726F',
      },
    ],
  },
  dials: {
    dial: [
      {
        value: '8',
      },
    ],
  },
};

@Component({
  selector: 'app-fusionchart',
  templateUrl: './fusionchart.component.html',
  styleUrls: ['./fusionchart.component.scss'],
})
export class FusionchartComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'angulargauge';
  dataFormat = 'json';
  dataSource = data;

  constructor() {}

  ngOnInit(): void {}
}
