import React from 'react';
import './App.css';
// import LoginPage from './components/HomePage';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink,green } from "@material-ui/core/colors";
import GlobalState from './components/GlobalState'
import SimpleAppBar from './components/header/SimpleAppBar';
import CurrentSection from './components/CurrentSection';
import MainPlayer from './components/player/MainPlayer';

function App() {
  const theme = createMuiTheme({
	  palette:{
		  primary:green
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
      {/* <LoginPage /> */}
      <MainPlayer />
      </MuiThemeProvider>
    </GlobalState>
  );
}

export default App;
