import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router, Link } from '@reach/router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ItemCollection from './pages/ItemCollection';
import CategoryCollection from './pages/CategoryCollection';
import ViewItem from './pages/ViewItem';
import AddItem from './pages/AddItem';
import UpdateItem from './pages/UpdateItem';
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
          <nav>
            <Link to='/'>home</Link>
            <Link to='items'>items</Link>
            <Link to='categories'>categories</Link>
            <Link to='addItem'>+ add item</Link>
          </nav>
        </header>
        <Router>
          <ItemCollection path='/' />
          <ViewItem path='viewItem/:itemId' />
          <AddItem path='addItem' />
          <UpdateItem path='updateItem/:itemId' />
          <ItemCollection path='items' />
          <CategoryCollection path='categories' />
        </Router>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
