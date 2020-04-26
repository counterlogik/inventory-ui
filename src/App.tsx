import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from '@reach/router';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import ItemCollection from './pages/ItemCollection';
import CategoryCollection from './pages/CategoryCollection';
import ViewItem from './pages/ViewItem';
import ItemForm from './pages/ItemForm';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const Main = styled.main`
  padding: 24px 0;
  width: 768px;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <main className='application-wrapper'>
          <Navigation />
          <Main>
            <Router>
              <ItemCollection path='/' />
              <ItemCollection path='items' />
              <CategoryCollection path='categories' />
              <ViewItem path='items/:id' />
              <ItemForm path='items/add' />
            </Router>
          </Main>
        </main>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
