import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () =>
  new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });

export default createApolloClient;
