import { QueryClient, QueryClientProvider } from 'react-query';
import { RouteList } from '../Routes/RouteList';
import { AppProvider } from './context';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const App = () => {
  const queryClient = new QueryClient();

  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <RouteList />
        </AppProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
};
