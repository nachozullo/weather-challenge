const UNITS = 'metric';

const getURL = (endpoint, location) => {
  const url = new URL(`${process.env.REACT_APP_API_URL}${endpoint}`);
  url.searchParams.append('units', UNITS);
  url.searchParams.append('lat', `${location.lat}`);
  url.searchParams.append('lon', `${location.lon}`);
  url.searchParams.append('appid', process.env.REACT_APP_API_KEY);
  return url.href;
};

export const getApi = async (endpoint, location, formatResponse = data => data) => {
  if (!location?.lat || !location?.lon) return null;
  const requestURL = getURL(endpoint, location);
  try {
    const resp = await fetch(requestURL);
    const data = await resp.json();
    return formatResponse(data);
  } catch (error) {
    return null;
  }
};
