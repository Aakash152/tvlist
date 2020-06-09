import React, { Component } from "react";
import "./App.css";

import Entry from "../src/Components/Entry";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Seried List</h1>
        </header>
        <br />
        <br />

        <Entry />
      </div>
    );
  }
}

export default App;
