import React from 'react';
import './App.scss';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

function App() {
  return (
    <div className='App'>
      <h3>inventory</h3>
      <h6>Placeholder while testing Material UI + more for now.</h6>
      <Button variant='contained' color='primary'>
        nothing here
      </Button>
      <IconButton color='primary' aria-label='love me' component='span'>
        <FavoriteBorderOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default App;
