import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink,green } from "@material-ui/core/colors";
import GlobalState from './components/GlobalState'
import SimpleAppBar from './components/header/SimpleAppBar';
import CurrentSection from './components/CurrentSection';
import MainPlayer from './components/player/MainPlayer';
import SwipeMenu from './components/SwipeMenu'

function App() {
  const theme = createMuiTheme({
	  palette:{
		  primary:pink
	  },
	  typography:{
		  useNextVariants:true
	  }
  })
  return (
    <GlobalState>
    <MuiThemeProvider theme={theme}>
      <SimpleAppBar />
      <CurrentSection />
      {/* <MainPlayer /> */}
      <SwipeMenu />
      </MuiThemeProvider>
    </GlobalState>
  );
}

export default App;
