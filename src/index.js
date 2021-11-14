import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './Components/utils/theme';
import { ThemeProvider } from '@mui/material';

ReactDOM.render(

  <ThemeProvider theme={theme}>

    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);
