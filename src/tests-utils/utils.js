import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {
    // swallow the errors
  },
});

const generateQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

export const renderWithQueryClient = (ui, client) => {
  const queryClient = client ?? generateQueryClient();
  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

export const createWrapper = () => {
  const queryClient = generateQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
