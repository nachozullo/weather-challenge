import { useState } from 'react';
import styled from 'styled-components';
import { LOCATIONS } from './locations';

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
  font-weight: ${({ selected }) => (selected ? '800' : '200')};
  letter-spacing: 0.5px;
`;

const Location = ({ label, selected, onSelected }) => {
  return (
    <LocationLabel selected={selected} onClick={onSelected}>
      {label}
    </LocationLabel>
  );
};

export const LocationPicker = ({ updateLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState('current_location');

  const handleSelectLocation = location => {
    console.log({ location });
    if (location === selectedLocation) return null;
    setSelectedLocation(location);
    if (location !== 'current_location') {
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
      <Location
        label='Ubicación actual'
        selected={selectedLocation === 'current_location'}
        onSelected={() => handleSelectLocation('current_location')}
      />
      {Object.keys(LOCATIONS).map(city => (
        <Location
          key={city}
          label={city}
          selected={selectedLocation === city}
          onSelected={() => handleSelectLocation(city)}
        />
      ))}
    </Container>
  );
};
