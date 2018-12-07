import { Injectable } from '@angular/core';
import { ChartSingleData } from '../components/charts/chart.types';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  public get sunnyDaysForSPb(): Promise<ChartSingleData[]> {
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

  public get sunnyDaysForMoscow(): Promise<ChartSingleData[]> {
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



}
