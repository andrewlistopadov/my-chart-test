import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { ChartSingleData } from '../../components/charts/chart.types';

@Component({
  selector: 'charts-page',
  templateUrl: './charts.page.component.html',
  styleUrls: ['./charts.page.component.css']
})
export class ChartsPageComponent implements OnInit {
  public sunnyDays: ChartSingleData[] = [];
  private activeCity: 'Moscow' | 'Saint-Petersburg' = 'Moscow';

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
    this.toggleCities();
  }

  public get title() {
    return `${this.activeCity} sunny days count by 2017 year`;
  }

  public toggleCities(): void {
    if (this.activeCity === 'Saint-Petersburg') {
      this.chartsService.sunnyDaysForSPb
        .then(sunnyDaysForSPb => this.sunnyDays = sunnyDaysForSPb);
      this.activeCity = 'Moscow';
    } else {
      this.chartsService.sunnyDaysForMoscow
        .then(sunnyDaysForMoscow => this.sunnyDays = sunnyDaysForMoscow);
      this.activeCity = 'Saint-Petersburg';
    }
  }

}
