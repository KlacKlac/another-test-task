import React from 'react';

import {Header} from './Header';
import {Constructor} from './Constructor';
import {BottomMenu} from './BottomMenu'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Constructor />
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
