import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { ChartSingleData } from '../../components/charts/chart.types';

enum Cities {
  SAINT_PETERSBURG = 'Saint-Petersburg',
  MOSCOW = 'Moscow',
  SOCHI = 'Sochi',
}

enum Charts {
  PIE, LINEAR
}

@Component({
  selector: 'charts-page',
  templateUrl: './charts.page.component.html',
  styleUrls: ['./charts.page.component.css']
})
export class ChartsPageComponent implements OnInit {
  private intro: any;
  private activeChart: Charts;
  public charts = Charts;

  private activeCity: Cities;
  public cities = Cities;
  public sunnyDays: ChartSingleData[] = [];


  constructor(private chartsService: ChartsService) {
  }


  ngOnInit() {
    this.goToChart(Charts.PIE);
    this.showCity(Cities.SAINT_PETERSBURG);
  }

  public startTour() {
    return import(/* webpackChunkName: 'intro.js' */ 'intro.js/intro.js')
      .then(({ default: introJs }) => {
        this.intro = introJs();

        // Initialize steps
        this.intro.setOptions({
          steps: [
            {
              element: '.charts-pills',
              intro: 'The pills panel allows to switch between pie and linear chart',
              position: 'bottom'
            },
            {
              element: '.pie-chart-wrapper .ngx-charts',
              intro: 'This is <i>currently selected</i> chart',
              position: 'bottom'
            },
            {
              element: '.pie-chart-wrapper .chart-legend',
              intro: 'This is its legend',
              position: 'bottom'
            },
            {
              element: '.pie-chart-wrapper__nav',
              intro: 'Pie chart has <span style="color: green;">3</span>sources to show',
              position: 'left'
            }
          ]
        });

        this.intro.start();
      });
  }

  public isActiveChart(chart: Charts): boolean {
    return this.activeChart === chart;
  }

  public goToChart(chart: Charts): void {
    this.activeChart = chart;
  }

  public get pieChartHeading() {
    return `${this.activeCity} sunny days count`;
  }

  public isCityActive(city: Cities): boolean {
    return this.activeCity === city;
  }

  public showCity(city: Cities): void {
    this.activeCity = city;

    switch (city) {
      case Cities.SAINT_PETERSBURG: {
        this.chartsService.getSunnyDaysForSPb()
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
      case Cities.MOSCOW: {
        this.chartsService.getSunnyDaysForMoscow()
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
      case Cities.SOCHI: {
        this.chartsService.getSunnyDaysForSochi()
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
    }
  }

}
