import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './view/components/Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
