import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='mainTitle'>Smurf Name Inventory</h1>
        <SmurfsList />
        <SmurfForm />

      </div>
    );
  }
}

export default App;
