import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeterComponent } from './meter/meter.component';
import { BarChartAComponent } from './bar-chart-a/bar-chart-a.component';
import { BarChartBComponent } from './bar-chart-b/bar-chart-b.component';

import { ChartsModule } from 'ng2-charts';
import { Ng2GaugeModule } from 'ng2-gauge';
import { GaugeComponent } from './gauge/gauge.component';
import { FusionchartComponent } from './fusionchart/fusionchart.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, Widgets);

@NgModule({
  declarations: [
    AppComponent,
    MeterComponent,
    BarChartAComponent,
    BarChartBComponent,
    GaugeComponent,
    FusionchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    Ng2GaugeModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
