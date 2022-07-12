import { useState } from 'react';
import styled from 'styled-components';
import { LOCATIONS } from '../../utils/locations';

const CURRENT_LOCATION = 'current_location';

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

const LocationLabel = styled.p`
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? 800 : 200)};
  letter-spacing: 0.5px;
  &:hover {
    font-weight: ${({ selected }) => (selected ? 800 : 400)};
  }
`;

export const LocationPicker = ({ updateLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(CURRENT_LOCATION);

  const handleSelectLocation = location => {
    if (location === selectedLocation) return null;
    setSelectedLocation(location);
    if (location !== CURRENT_LOCATION) {
      updateLocation({
        lat: LOCATIONS[location].lat,
        lon: LOCATIONS[location].lon,
      });
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          updateLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        () => updateLocation(null, true)
      );
    }
  };

  return (
    <Container>
      <LocationLabel
        selected={selectedLocation === CURRENT_LOCATION}
        onClick={() => handleSelectLocation(CURRENT_LOCATION)}
      >
        Ubicación actual
      </LocationLabel>
      {Object.keys(LOCATIONS).map(city => (
        <LocationLabel
          key={city}
          selected={selectedLocation === city}
          onClick={() => handleSelectLocation(city)}
        >
          {city}
        </LocationLabel>
      ))}
    </Container>
  );
};
