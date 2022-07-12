import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { CurrentWeather, Forecast, Header, Error } from '../components';
import { LocationPicker } from '../components/location-picker';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

const LocationContainer = styled.div`
  display: flex;
  flex: 1;
  background: #224f5f;
  padding: 20px;
  min-width: 170px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #00649f 0%, #80d0c7 100%);
`;

const RightContainer = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Home = () => {
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => setLocation({ lat: position.coords.latitude, lon: position.coords.longitude }),
      () => setPermissionDenied(true)
    );
  }, []);

  const handleLocationChange = useCallback((newLocation, locationPermissionDenied = false) => {
    setPermissionDenied(locationPermissionDenied);
    setLocation(newLocation);
  }, []);

  return (
    <Container>
      <LocationContainer>
        <LocationPicker updateLocation={handleLocationChange} />
      </LocationContainer>
      <RightContainer>
        <Header />
        <WeatherContainer>
          {permissionDenied && !location ? (
            <Error
              icon={require('../components/icons/location_denied.jpeg')}
              title='Permisos denegados'
              text='Para obtener el clima de su ubicación actual, necesitamos que habilite los permisos de
              ubicación del navegador.'
            />
          ) : (
            <>
              <CurrentWeather location={location} />
              <Forecast location={location} />
            </>
          )}
        </WeatherContainer>
      </RightContainer>
    </Container>
  );
};
