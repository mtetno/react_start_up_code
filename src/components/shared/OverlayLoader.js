import React from 'react';
import Loader from 'halogen/MoonLoader';
import { Col } from 'react-bootstrap';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const OverlayLoader = () => {
  return (
    <Col className='overlay'>
      <Col className='overlay-content'>
        <MuiThemeProvider>
          <CircularProgress size={80} thickness={5} color="#8b9400"/>
        </MuiThemeProvider>
      </Col>
    </Col>
  );
};

export default OverlayLoader;
