import * as React from 'react';
import TeamsContainer from './TeamsContainer';
import SingleTeam from '../SingleTeam/SingleTeam';
import { NavLink } from 'react-router-dom';
import './Teams.css';

interface TeamsProps {
  currentUser: CurrentUser;
}

export interface CurrentUser {
  id: number;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
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
    if (this.state.userTeams.length) {
      return this.state.userTeams.map((team: any) => {
        return <SingleTeam team={team} />;
      });
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="teams-container">
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
