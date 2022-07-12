import React from 'react';
import { screen } from '@testing-library/react';
import { Home } from '../home';
import '@testing-library/jest-dom';
import { renderWithQueryClient } from '../../tests-utils/utils';
import { mockOneCallResponse } from '../../mocks/mockData';

jest.mock('../../api/use-city-name', () => ({
  useCityName: () => ({
    isFetching: false,
    refetch: jest.fn,
    data: { city: 'Ciudad', country: 'AR' },
  }),
}));

jest.mock('../../api/use-weather', () => ({
  useWeather: () => ({
    isFetching: false,
    refetch: jest.fn,
    data: mockOneCallResponse,
  }),
}));

afterAll(() => {
  jest.resetAllMocks();
});

describe('Home page', () => {
  it('renders correctly', async () => {
    renderWithQueryClient(<Home />);

    const forecast = await screen.findAllByAltText('forecast-icon');
    expect(forecast.length).toBe(5);

    await screen.findByText(/Ciudad/i);
  });
});
