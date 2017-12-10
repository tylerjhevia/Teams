import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import Teams from './Teams/Teams';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';

class App extends React.Component<any, any> {
  constructor(props: Object) {
    super({});
  }

  componentDidMount() {
    if (localStorage.getItem('current user')) {
      this.props.storeCurrentUser(
        JSON.parse(localStorage.getItem('current user') || '{}')
      );
    }
  }

  checkIfUserIsLoggedIn() {
    if (this.props.currentUser.id) {
      return <Redirect to="/teams" />;
    } else {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser.id ? <Sidebar /> : null}
        {this.checkIfUserIsLoggedIn()}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/teams" component={Teams} />
      </div>
    );
  }
}

export default AppContainer(App);
