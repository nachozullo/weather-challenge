import styled from 'styled-components';

const LINKEDIN_URL = 'https://linkedin.com/in/ignacio-zullo';
const GITHUB_URL = 'https://github.com/nachozullo/weather-challenge';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  gap: 12px;
`;

const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: red;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-0.25rem);
  }
`;

const handleOpenUrl = url => () => window.open(url, '_blank');

export const Header = () => {
  return (
    <HeaderContainer>
      <Icon
        src={require('../icons/icon_linkedin.png')}
        alt='linkedin-icon'
        onClick={handleOpenUrl(LINKEDIN_URL)}
      />
      <Icon
        src={require('../icons/icon_github.png')}
        alt='github-icon'
        onClick={handleOpenUrl(GITHUB_URL)}
      />
    </HeaderContainer>
  );
};
