import React from 'react';
import { screen } from '@testing-library/react';
import { CurrentWeather } from '../index';
import '@testing-library/jest-dom';
import { LOCATIONS } from '../../../utils/locations';
import { renderWithQueryClient } from '../../../tests-utils/utils';
import { mockOneCallResponse } from '../../../mocks/mockData';

const location = LOCATIONS['Mendoza'];

jest.mock('../../../api/use-city-name', () => ({
  useCityName: () => ({
    isFetching: false,
    refetch: jest.fn,
    data: { city: 'Mendoza', country: 'AR' },
  }),
}));

jest.mock('../../../api/use-weather', () => ({
  useWeather: () => ({
    isFetching: false,
    refetch: jest.fn,
    data: mockOneCallResponse,
  }),
}));

describe('CurrentWeather component', () => {
  it('renders correctly', async () => {
    renderWithQueryClient(<CurrentWeather location={location} />);
    expect(screen.getByAltText('weather-icon')).toBeDefined();
  });
});
