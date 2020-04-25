import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router, Link } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ItemCollection from './pages/ItemCollection';
import CategoryCollection from './pages/CategoryCollection';
import ViewItem from './pages/ViewItem';
import ItemForm from './pages/ItemForm';
import theme from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <main className='application-wrapper'>
          <header>
            <h3>inventory</h3>
            <nav>
              <Link to='/'>home</Link>
              <Link to='/items'>items</Link>
              <Link to='/categories'>categories</Link>
              <Link to='/items/add'>+ add item</Link>
            </nav>
          </header>
          <Router>
            <ItemCollection path='/' />
            <ItemCollection path='items' />
            <CategoryCollection path='categories' />
            <ViewItem path='items/:itemId' />
            <ItemForm path='items/add' />
          </Router>
        </main>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
