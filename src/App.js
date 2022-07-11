import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './pages/home';

export const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
