import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0 3px 12px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  border-radius: 5px;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-0.25rem);
  }
`;

const MaxTemperature = styled.span`
  font-weight: 500;
  padding: 5px;
`;

const MinTemperature = styled.span`
  font-weight: 300;
  padding: 5px;
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const getDayName = dt =>
  new Date(dt * 1000).toLocaleString('es', {
    weekday: 'long',
  });

export const ForecastItem = ({ dt, minTemp, maxTemp, weatherCode }) => {
  return (
    <Container>
      <p>{getDayName(dt)}</p>
      <Icon src={require(`../icons/icon_${weatherCode}.png`)} alt='forecast-icon' />
      <div>
        <MaxTemperature>{Math.ceil(maxTemp)}ºC</MaxTemperature>
        <MinTemperature>{Math.round(minTemp)}ºC</MinTemperature>
      </div>
    </Container>
  );
};
