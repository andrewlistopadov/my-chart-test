import { Injectable } from '@angular/core';
import { ColorThemesDictionary, ColorThemes } from './chart.types';

const chartsColorThemes: ColorThemesDictionary = {
  [ColorThemes.CLASSIC]: {
    domain: ['#0460a9', '#6660b6', '#a35bb4', '#d553a3', '#f95487', '#ff6564', '#ff833d', '#ffa600']
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChartConfigService {
  private _colorThemes: ColorThemesDictionary;
  public get colorThemes(): ColorThemesDictionary {
    return this._colorThemes;
  }

  constructor() {
    this._colorThemes = chartsColorThemes;
  }

}
