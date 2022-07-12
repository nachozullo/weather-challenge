import { renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LOCATIONS } from '../../utils/locations';
import { createWrapper } from '../../tests-utils/utils';
import { useWeather } from '../use-weather';

const location = LOCATIONS['Mendoza'];

describe('useWeather hook', () => {
  it('should return current and daily forecast', async () => {
    const { result } = renderHook(() => useWeather(location), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data.current).toBeDefined();
    expect(result.current.data.daily).toBeDefined();
  });
});
