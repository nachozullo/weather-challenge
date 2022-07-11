import { useQuery } from 'react-query';

const UNITS = 'metric';

const getApiUrl = (endpoint, lat, lon) => {
  const url = new URL(`${process.env.REACT_APP_API_URL}${endpoint}`);
  url.searchParams.append('units', UNITS);
  url.searchParams.append('lat', `${lat}`);
  url.searchParams.append('lon', `${lon}`);
  url.searchParams.append('appid', process.env.REACT_APP_API_KEY);
  return url.href;
};

export const getWeather = async ({ lat, lon }) => {
  if (!lat || !lon) return null;
  const requestURL = getApiUrl('/onecall', lat, lon);
  try {
    const resp = await fetch(requestURL);
    const data = await resp.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getCityName = async ({ lat, lon }) => {
  if (!lat || !lon) return null;
  const requestURL = getApiUrl('/weather', lat, lon);
  try {
    const resp = await fetch(requestURL);
    const data = await resp.json();
    return {
      city: data.name,
      country: data.sys.country,
    };
  } catch (error) {
    return null;
  }
};

export const useWeather = location =>
  useQuery('weather', () => getWeather(location), { enabled: !!location });

export const useCityName = location =>
  useQuery('city-name', () => getCityName(location), { enabled: !!location });
