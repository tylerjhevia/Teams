import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TeamsContainer from './containers/TeamsContainer';
import Teams from './Teams/Teams';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';

class App extends React.Component<any, any> {
  constructor(props: Object) {
    super({});
  }

  checkIfUserIsLoggedIn() {
    if (this.props.currentUser.id) {
      return <Redirect to="/teams" />;
    } else {
      return null;
    }
  }

  render() {
    console.log('props', this.props.currentUser);
    return (
      <div className="App">
        {this.checkIfUserIsLoggedIn()}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/teams" component={Teams} />
      </div>
    );
  }
}

export default TeamsContainer(App);
