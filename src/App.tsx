import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
      </div>
    );
  }
}

export default App;
