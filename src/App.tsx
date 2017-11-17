import * as React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Home />
      </div>
    );
  }
}

export default App;
