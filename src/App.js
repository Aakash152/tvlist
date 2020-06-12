import React, { Component } from "react";
import "./App.css";
import Footerw from '../src/Components/Footerw';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../src/Components/Navbar1';

import Entry from "../src/Components/Entry";

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navbar1/>
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
