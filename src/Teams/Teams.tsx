import * as React from 'react';
import TeamsContainer from '../containers/TeamsContainer';
import SingleTeam from '../SingleTeam/SingleTeam';
import { NavLink } from 'react-router-dom';
import './Teams.css';

interface TeamsProps {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: Number;
  username: String;
  password: String;
  created_at: String;
  updated_at: String;
}

interface TeamsState {
  userTeams: Array<Object>;
}

class Teams extends React.Component<TeamsProps, TeamsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userTeams: []
    };
  }

  componentDidMount() {
    this.fetchUserTeams();
  }

  fetchUserTeams() {
    fetch(`http://localhost:3001/api/v1/teams/${this.props.currentUser.id}`)
      .then(response => response.json())
      .then((parsedResponse: any) => {
        return this.setState({ userTeams: parsedResponse });
      })
      .catch(error => console.log(error));
  }

  renderTeams() {
    console.log('hey');
    return this.state.userTeams.map((team: any) => {
      return <SingleTeam team={team} />;
    });
  }
  render() {
    return (
      <div className="teams-container">
        <p className="current-user">
          Logged in as: {this.props.currentUser.username}
        </p>
        <h1>My teams</h1>
        <ul className="teams-list">
          {this.renderTeams()}
        </ul>
        <NavLink to="/home">Draft a team</NavLink>
      </div>
    );
  }
}
export default TeamsContainer(Teams);
