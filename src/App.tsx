import React from 'react';
import {
  HashRouter as Router,
} from "react-router-dom";
import './App.scss';
import { Header } from './Header';
import { Team } from './team/Team';
import { Publication } from './publication/Publication';
import { GettingStarted } from './getting-started/GettingStarted';
import { Teaser } from './teaser/Teaser';
import { Features } from './features/Features';

function App() {
  return (
    <Router basename="/" hashType="noslash">
      <div className="App">
        <Header />
        <div id="content">
          <Teaser/>
          <Features/>
          <GettingStarted/>
          <Publication />
          <Team />

          <div id="footer">
            <div id="footer_content">
              Copyright © 2018-2020 The OmniTrack Team. All Rights Reserved.
          </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
