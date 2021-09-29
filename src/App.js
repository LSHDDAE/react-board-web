import React from 'react';
import Router from './components/route/Router';
import Navbar from './components/route/Navbar';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Router/>
      </Container>
    </div>
  );
}

export default App;
