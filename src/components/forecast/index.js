import styled from 'styled-components';
import { useWeather } from '../../api/queries';
import { ForecastItem } from './forecast-item';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
  max-width: 100vw;
  overflow-x: scroll;
  padding: 10px 2px;
`;

const Spacer = styled.div`
  width: 10px;
`;

export const Forecast = ({ location }) => {
  const { data } = useWeather(location);

  return (
    <Container>
      <Spacer />
      {data &&
        data.daily
          .slice(1)
          .slice(0, 5)
          .map((forecast, i) => (
            <ForecastItem
              key={i}
              dt={forecast.dt}
              minTemp={forecast.temp.min}
              maxTemp={forecast.temp.max}
              weatherCode={forecast.weather[0].icon}
            />
          ))}
      <Spacer />
    </Container>
  );
};
