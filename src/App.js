import React, { Component } from "react";
import "./App.css";
import Footerw from '../src/Components/Footerw';

import Entry from "../src/Components/Entry";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series Finder</h1>
        </header>
        <br />
        
        
        <Entry></Entry>

        <br/><br/><br/>
        <Footerw/>

      </div>
    );
  }
}

export default App;
