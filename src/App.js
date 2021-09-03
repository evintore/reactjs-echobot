import React, {Component} from 'react';
import User from "./components/User";

import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <h2>Echobot</h2>
      <User/>
      </div>
    );

  }
}
export default App;


