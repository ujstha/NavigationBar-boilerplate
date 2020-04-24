import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import NavigationBarContainer from './containers/NavigationBarContainer';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Krub, sans-serif',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <NavigationBarContainer />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
