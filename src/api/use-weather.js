import { useQuery } from 'react-query';
import { getApi } from './get-api';

const WEATHER_ENDPOINT = '/onecall';

const getWeather = async location => {
  return getApi(WEATHER_ENDPOINT, location);
};

export const useWeather = location =>
  useQuery('weather', () => getWeather(location), { enabled: !!location });
