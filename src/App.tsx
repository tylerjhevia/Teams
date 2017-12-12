import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Teams from './Teams/Teams';
import './App.css';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Sidebar from './Sidebar/Sidebar';
import AppContainer from './AppContainer';
import { CurrentUser } from './Teams/Teams';

interface AppProps {
  currentUser: CurrentUser;
  storeCurrentUser: Function;
}

class App extends React.Component<AppProps, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    console.log('app props', this.props);
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
