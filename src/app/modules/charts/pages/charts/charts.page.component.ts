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
  private activeChart: Charts;
  public charts = Charts;

  private activeCity: Cities;
  public cities = Cities;
  public sunnyDays: ChartSingleData[] = [];


  constructor(private chartsService: ChartsService) { }


  ngOnInit() {
    this.goToChart(Charts.PIE);
    this.showCity(Cities.SAINT_PETERSBURG);
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
        this.chartsService.sunnyDaysForSPb
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
      case Cities.MOSCOW: {
        this.chartsService.sunnyDaysForMoscow
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
      case Cities.SOCHI: {
        this.chartsService.sunnyDaysForSochi
          .then(sunnyDays => this.sunnyDays = sunnyDays);
        break;
      }
    }
  }

}
