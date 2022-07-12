import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 400px;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`;

const Title = styled.p`
  color: grey;
  margin-top: 20px;
  font-weight: 600;
  font-size: 20px;
`;

const Message = styled.p`
  color: grey;
  margin-top: 10px;
  text-align: center;
`;

export const Error = ({ title, text, icon, iconWidth = 200, iconHeight = 200 }) => {
  return (
    <Container>
      <img src={icon} alt='error-icon' width={iconWidth} height={iconHeight} />
      <Title>{title}</Title>
      <Message>{text}</Message>
    </Container>
  );
};
