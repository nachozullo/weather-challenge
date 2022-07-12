import { useEffect } from 'react';
import styled from 'styled-components';
import { useCityName, useWeather } from '../../api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
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
  const { data, refetch, isFetching } = useWeather(location);
  const {
    data: cityData,
    refetch: refetchCity,
    isFetching: isFetchingCity,
  } = useCityName(location);

  useEffect(() => {
    refetchCity(location);
    refetch(location);
  }, [location, refetch, refetchCity]);

  if (isFetching || isFetchingCity) {
    return (
      <Container>
        <Skeleton circle width={100} height={100} />
        <Skeleton width={120} height={60} />
        <Skeleton width={180} height={30} />
        <Skeleton width={220} height={18} style={{ margin: '20px 0 40px' }} />
      </Container>
    );
  }

  return (
    <Container>
      {data && (
        <>
          <Icon
            src={require(`../icons/icon_${data.current.weather[0].icon}.png`)}
            alt='weather-icon'
          />
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
