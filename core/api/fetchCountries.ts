import axios from 'axios';
import ENDPOINTS from './Endpoints';
import transformCountriesData from '../transformers/transformCountriesData';

export const fetchCountries = async () => {
  const res = await axios.get(ENDPOINTS.countriesData.getAll());
  console.log(res);
  const transformedData = transformCountriesData(res.data);
  return transformedData;
};
