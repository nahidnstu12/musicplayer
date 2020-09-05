import React from 'react';
import './App.css';
// import LoginPage from './components/HomePage';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
import GlobalState from './components/GlobalState'
import SimpleAppBar from './components/header/SimpleAppBar';
import CurrentSection from './components/CurrentSection';

function App() {
  return (
    <GlobalState>
      <SimpleAppBar />
      <CurrentSection />
      {/* <LoginPage /> */}
    </GlobalState>
  );
}

export default App;
