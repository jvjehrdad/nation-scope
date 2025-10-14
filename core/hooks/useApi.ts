import axiosInstance from '../api/axiosInstance';
import { BASE_URLS } from '../constants/urls';
import { AxiosRequestConfig } from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface CallApiOptions {
  method?: HttpMethod;
  baseURLType?: keyof typeof BASE_URLS;
  requestTransformer?: (data: any) => any;
  responseTransformer?: (data: any) => any;
  headers?: Record<string, string>;
}

export const callApiDirect = async <T = any>(
  endpoint: string,
  payload: any = null,
  params: Record<string, any> = {},
  options: CallApiOptions = {},
): Promise<T> => {
  const {
    method = 'GET',
    baseURLType = 'BASE',
    requestTransformer,
    responseTransformer,
    headers = {},
  } = options;

  const baseURL = BASE_URLS[baseURLType];
  const finalPayload = requestTransformer
    ? requestTransformer(payload)
    : payload;

  const config: AxiosRequestConfig = {
    params,
    baseURL,
    headers,
  };

  let response;

  switch (method.toUpperCase()) {
    case 'GET':
      response = await axiosInstance.get<T>(endpoint, config);
      break;
    case 'POST':
      response = await axiosInstance.post<T>(endpoint, finalPayload, config);
      break;
    case 'PUT':
      response = await axiosInstance.put<T>(endpoint, finalPayload, config);
      break;
    case 'DELETE':
      response = await axiosInstance.delete<T>(endpoint, config);
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  return responseTransformer
    ? responseTransformer(response.data)
    : response.data;
};
