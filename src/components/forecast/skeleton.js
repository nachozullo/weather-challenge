import RLSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 160px;
  width: 110px;
  margin: 0 5px;
`;

export const Skeleton = () => {
  return (
    <RLSkeleton
      count={5}
      width={105}
      height={150}
      inline
      style={{ margin: 5 }}
      wrapper={Wrapper}
      containerClassName='forecast-skeleton-container '
    />
  );
};
