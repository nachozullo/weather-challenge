// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { LOCATIONS } from './components/location-picker/locations';
import { server } from './mocks/server';

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementation(success =>
    Promise.resolve(
      success({
        coords: {
          latitude: LOCATIONS.Mendoza.lat,
          longitude: LOCATIONS.Mendoza.lon,
        },
      })
    )
  ),
};

global.navigator.geolocation = mockGeolocation;

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
