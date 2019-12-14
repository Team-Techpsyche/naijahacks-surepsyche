import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <LandingPage />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
