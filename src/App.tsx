import * as React from 'react';
import './App.css';
import Welcome from './Welcome/Welcome';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
