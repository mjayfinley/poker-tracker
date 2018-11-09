import React, { Component } from 'react';
import {Bankroll} from './Components/Bankroll'
import {History} from './Components/History'
import {Statistics} from './Components/Statistics'
import {Tournament} from './Components/Tournament'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       Poker Tracker
       <Bankroll />
       <Tournament />
       <History />
       <Statistics />
       
      </div>
    );
  }
}

export default App;
