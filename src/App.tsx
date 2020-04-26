import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from '@reach/router';
import ItemCollection from './pages/ItemCollection';
import CategoryCollection from './pages/CategoryCollection';
import ViewItem from './pages/ViewItem';
import ItemForm from './pages/ItemForm';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main className='application-wrapper'>
        <Navigation />
        <Router>
          <ItemCollection path='/' />
          <ItemCollection path='items' />
          <CategoryCollection path='categories' />
          <ViewItem path='items/:id' />
          <ItemForm path='items/add' />
        </Router>
      </main>
    </ApolloProvider>
  );
}

export default App;
