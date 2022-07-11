import { useEffect } from 'react';
import styled from 'styled-components';
import { useCityName, useWeather } from '../../api/queries';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 500;
`;

const Subtitle = styled.h4`
  font-size: 1.5rem;
  color: grey;
  font-weight: 500;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

export const CurrentWeather = ({ location }) => {
  const { data, refetch } = useWeather(location);
  const { data: cityData, refetch: refetchCity } = useCityName(location);

  useEffect(() => {
    refetchCity(location);
    refetch(location);
  }, [location, refetch, refetchCity]);

  return (
    <Container>
      {data && (
        <>
          <Icon src={require(`../icons/icon_${data.current.weather[0].icon}.png`)} alt='' />
          <Title>{Math.round(data?.current?.temp)}ºC</Title>
          <Subtitle>
            {cityData.city}, {cityData.country}
          </Subtitle>
          <br />
          <DataContainer>
            <span>Sensación térmica: {Math.round(data?.current?.feels_like)}ºC</span>-
            <span>Humedad: {Math.round(data?.current?.humidity)}%</span>
          </DataContainer>
        </>
      )}
    </Container>
  );
};