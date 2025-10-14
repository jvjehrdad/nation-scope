export interface CountryType {
  name: { common: string };
  capital?: string[];
  population: number;
  area: number;
  flags: { svg: string };
}
