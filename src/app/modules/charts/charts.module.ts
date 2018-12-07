import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsPageComponent } from './pages/charts/charts.page.component';
import { ChartComponent } from './components/chart/chart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChartsPageComponent}
];

@NgModule({
  declarations: [ChartsPageComponent, ChartComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsModule { }
