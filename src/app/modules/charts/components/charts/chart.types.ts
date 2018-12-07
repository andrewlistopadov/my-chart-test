export enum ColorThemes {
  CLASSIC
}

export interface ColorScheme {
  domain: string[];
}

export interface ColorThemesDictionary {
  [key: number]: ColorScheme;
}

export interface ChartSingleData {
  name: string;
  value: number;
}

export interface ChartMultiData {
  name: string;
  series: ChartSingleData[];
}