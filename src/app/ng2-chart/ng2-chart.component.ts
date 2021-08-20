import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-ng2-chart',
  templateUrl: './ng2-chart.component.html',
  styleUrls: ['./ng2-chart.component.scss'],
})
export class Ng2ChartComponent implements OnInit {
  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) {}

  ngOnInit(): void {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      //Set theme
      am4core.useTheme(am4themes_animated);

      // Create chart
      let chart = am4core.create('chartdiv', am4charts.GaugeChart);

      chart.responsive.enabled = true;

      // Create axis
      let axis = chart.xAxes.push(
        new am4charts.ValueAxis<am4charts.AxisRendererCircular>()
      );
      axis.min = 0;
      axis.max = 30;
      axis.strictMinMax = true;

      // Set inner radius
      chart.innerRadius = -50;

      // Add ranges
      let range = axis.axisRanges.create();
      range.value = 0;
      range.endValue = 7.5;
      range.axisFill.fillOpacity = 1;
      range.axisFill.fill = am4core.color('#88AB75');
      range.axisFill.zIndex = -1;

      let range2 = axis.axisRanges.create();
      range2.value = 7.5;
      range2.endValue = 15;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = am4core.color('#DBD56E');
      range2.axisFill.zIndex = -1;

      let range3 = axis.axisRanges.create();
      range3.value = 15;
      range3.endValue = 30;
      range3.axisFill.fillOpacity = 1;
      range3.axisFill.fill = am4core.color('#DE8F6E');
      range3.axisFill.zIndex = -1;

      // Add hand
      let hand = chart.hands.push(new am4charts.ClockHand());
      hand.value = 18;
      // hand.pin.disabled = false;
      // hand.fill = am4core.color('#2D93AD');
      // hand.stroke = am4core.color('#2D93AD');
      // hand.innerRadius = am4core.percent(50);
      // hand.radius = am4core.percent(80);
      // hand.startWidth = 15;

      var label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = 20;
      label.text = '5 days';
      label.horizontalCenter = 'middle';
    });
  }
}
