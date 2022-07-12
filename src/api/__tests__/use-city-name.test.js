import { renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LOCATIONS } from '../../components/location-picker/locations';
import { useCityName } from '../use-city-name';
import { createWrapper } from '../../tests-utils/utils';

const location = LOCATIONS['Mendoza'];

describe('useCityName hook', () => {
  it('should return city and country', async () => {
    const { result } = renderHook(() => useCityName(location), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data.city).toBe('Mendoza');
    expect(result.current.data.country).toBe('AR');
  });
});
