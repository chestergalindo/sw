import { RouteList } from '../Routes/RouteList';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils/client'

export const App = () => (
  <ApolloProvider client={client}>
    <RouteList />
  </ApolloProvider>
);
