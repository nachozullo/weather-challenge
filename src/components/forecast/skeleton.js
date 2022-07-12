import RLSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = () => {
  return <RLSkeleton count={5} width={105} height={150} inline style={{ margin: 5 }} />;
};
