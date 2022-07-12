import React from 'react';
import { screen, render } from '@testing-library/react';
import { LocationPicker } from '../index';
import '@testing-library/jest-dom';
import { LOCATIONS } from '../locations';

const component = () => render(<LocationPicker updateLocation={jest.fn} />);

describe('LocationPicker component', () => {
  it('renders correctly', () => {
    component();
    expect(screen.getByText('Ubicación actual')).toBeVisible();
    const cities = Object.keys(LOCATIONS);
    cities.map(city => expect(screen.getByText(city)).toBeVisible());
  });
});
