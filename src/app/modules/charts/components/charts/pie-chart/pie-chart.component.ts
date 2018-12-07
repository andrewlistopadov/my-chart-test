import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ChartConfigService } from '../chart-config.service';
import { ColorScheme, ColorThemes, ChartSingleData } from '../chart.types';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent implements OnInit {
  @Input() data: ChartSingleData[] = [];
  @Input() view: number[] = [];
  @Input() colorScheme: ColorScheme = this.chartConfigService.colorThemes[ColorThemes.CLASSIC];
  @Input() legend = true;
  @Input() explodeSlices = false;
  @Input() labels = true;
  @Input() doughnut = false;
  @Input() gradient = false;

  constructor(private chartConfigService: ChartConfigService) { }

  ngOnInit() { }

  onSelect(event) {
    console.log(event);
  }

}
