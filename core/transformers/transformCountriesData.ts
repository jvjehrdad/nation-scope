import { CountryType } from '../interfaces';

export const transformCountriesData = (data: any[]): CountryType[] => {
  return data.map((country: any) => ({
    name: country.name,
    capital: country.capital,
    population: country.population,
    area: country.area,
    flags: country.flags,
  }));
};

export default transformCountriesData;
