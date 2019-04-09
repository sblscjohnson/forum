import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import  routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <h1>Forum</h1> */}
          
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
