import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';
import Register from './Register/Register';
import Login from './Login/Login';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Login" component={Login} />
      </div>
    );
  }
}

export default App;
