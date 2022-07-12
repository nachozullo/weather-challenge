import React from 'react';
import { screen } from '@testing-library/react';
import { Forecast } from '../index';
import '@testing-library/jest-dom';
import { LOCATIONS } from '../../location-picker/locations';
import { renderWithQueryClient } from '../../../tests-utils/utils';
import { mockOneCallResponse } from '../../../mocks/mockData';

const location = LOCATIONS['Mendoza'];

jest.mock('../../../api/use-weather', () => ({
  useWeather: () => ({
    isFetching: false,
    refetch: jest.fn,
    data: mockOneCallResponse,
  }),
}));

describe('Forecast component', () => {
  it('renders correctly', async () => {
    renderWithQueryClient(<Forecast location={location} />);
    expect(screen.getAllByAltText('forecast-icon').length).toBe(5);
  });
});
