import React from 'react';
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalStyles from './styles';
import Pages from './pages';

const root = createRoot(document.getElementById('root'));

//ApolloClient Instance
const client = new ApolloClient({
  uri: 'http://localhost:4000',//specify the location of our GraphQL server
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
