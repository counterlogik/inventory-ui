import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <header>
          <h3>inventory</h3>
        </header>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
