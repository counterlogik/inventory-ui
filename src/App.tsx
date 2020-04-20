import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ApolloClient, { gql } from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';
import theme from './theme';

const StyledButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const ITEMS = gql`
  query getItems {
    items {
      id
      ownerId
      description
      model
      categories {
        id
        title
      }
      locations {
        id
        title
      }
      spark
      count
      monetaryValue
      link
      notes
      tags {
        id
        title
      }
      image
    }
  }
`;

function Items() {
  const { loading, error, data } = useQuery(ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.items.map((item: any) => <p>{JSON.stringify(item)}</p>);
}

function App() {
  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <h3>inventory</h3>
          <h6>Placeholder while testing Material UI + more for now.</h6>
          <Button variant='contained' color='primary'>
            nothing here
          </Button>
          <StyledButton>custom here</StyledButton>
          <IconButton color='primary' aria-label='love me' component='span'>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <Items />
        </div>
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default App;
