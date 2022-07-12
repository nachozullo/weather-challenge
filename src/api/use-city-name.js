import { useQuery } from 'react-query';
import { getApi } from './get-api';

const CITY_NAME_ENDPOINT = '/weather';

const getCityName = async location => {
  return getApi(CITY_NAME_ENDPOINT, location, data => ({
    city: data.name,
    country: data.sys.country,
  }));
};

export const useCityName = location =>
  useQuery('city-name', () => getCityName(location), { enabled: !!location });
