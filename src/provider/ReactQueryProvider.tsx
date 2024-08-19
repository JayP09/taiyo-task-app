/*
 * ReactQueryProvider component Manages data fetching and caching using React Query:
 *
 * Takes `children` as a prop, representing the wrapped components.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

type RootProviderType = {
  children: ReactNode;
};

const ReactQueryProvider = ({ children }: RootProviderType) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
