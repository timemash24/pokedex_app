import React, { useRef } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
interface MyAppProps {
  Component: any;
  pageProps: any;
}
function MyApp({ Component, pageProps }: MyAppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 50000,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onError: (error) => console.log((error as any).message),
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
