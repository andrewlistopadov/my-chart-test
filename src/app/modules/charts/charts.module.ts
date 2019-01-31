import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsPageComponent } from './pages/charts/charts.page.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ChartsPageComponent }
];

@NgModule({
  declarations: [
    ChartsPageComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
  ],
  exports: [RouterModule]
})
export class ChartsModule { }
