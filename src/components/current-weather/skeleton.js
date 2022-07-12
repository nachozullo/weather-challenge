import RLSkeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Skeleton = () => {
  return (
    <>
      <RLSkeleton circle width={100} height={100} />
      <RLSkeleton width={120} height={60} />
      <RLSkeleton width={180} height={30} />
      <RLSkeleton width={220} height={18} style={{ margin: '20px 0 40px' }} />
    </>
  );
};
