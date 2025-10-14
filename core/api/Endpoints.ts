import { BASE_URLS } from '../constants/urls';

const BASE = BASE_URLS.BASE;

const ENDPOINTS = {
  countriesData: {
    getAll: () => `${BASE}/v3.1/all/`,
  },
};

export default ENDPOINTS;
