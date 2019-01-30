import { Injectable } from '@angular/core';
import { ChartSingleData } from '../components/charts/chart.types';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  public getSunnyDaysForSPb(): Promise<ChartSingleData[]> {
    return Promise.resolve(
      [
        {
          name: 'January',
          value: 1
        },
        {
          name: 'February',
          value: 0
        },
        {
          name: 'March',
          value: 1
        },
        {
          name: 'April',
          value: 5
        },
        {
          name: 'May',
          value: 10
        },
        {
          name: 'June',
          value: 9
        },
        {
          name: 'July',
          value: 11
        },
        {
          name: 'August',
          value: 9
        },
        {
          name: 'September',
          value: 6
        },
        {
          name: 'October',
          value: 3
        },
        {
          name: 'November',
          value: 2
        },
        {
          name: 'December',
          value: 1
        },
      ]
    );
  }

  public getSunnyDaysForMoscow(): Promise<ChartSingleData[]> {
    return Promise.resolve(
      [
        {
          name: 'January',
          value: 2
        },
        {
          name: 'February',
          value: 1
        },
        {
          name: 'March',
          value: 1
        },
        {
          name: 'April',
          value: 5
        },
        {
          name: 'May',
          value: 11
        },
        {
          name: 'June',
          value: 12
        },
        {
          name: 'July',
          value: 12
        },
        {
          name: 'August',
          value: 13
        },
        {
          name: 'September',
          value: 8
        },
        {
          name: 'October',
          value: 5
        },
        {
          name: 'November',
          value: 3
        },
        {
          name: 'December',
          value: 2
        },
      ]
    );
  }

  public getSunnyDaysForSochi(): Promise<ChartSingleData[]> {
    return Promise.resolve(
      [
        {
          name: 'January',
          value: 5
        },
        {
          name: 'February',
          value: 4
        },
        {
          name: 'March',
          value: 8
        },
        {
          name: 'April',
          value: 11
        },
        {
          name: 'May',
          value: 7
        },
        {
          name: 'June',
          value: 11
        },
        {
          name: 'July',
          value: 11
        },
        {
          name: 'August',
          value: 15
        },
        {
          name: 'September',
          value: 16
        },
        {
          name: 'October',
          value: 11
        },
        {
          name: 'November',
          value: 11
        },
        {
          name: 'December',
          value: 5
        },
      ]
    );
  }



}
