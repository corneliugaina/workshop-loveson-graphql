import React from 'react';
import OctocatList from './components/OctocatList';

// import d'ApolloClient & ApolloProvider
import { ApolloProvider } from 'react-apollo';

// Depuis Apollo 2.X , il faut importer ces packages 
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


// apollo client setup

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4055/graphql/'
})

const client = new ApolloClient ({
  cache, 
  link,
})

// functional render
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Listing des octocats</h1>
        <OctocatList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
