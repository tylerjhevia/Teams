import * as React from 'react';
import TeamsContainer from '../containers/TeamsContainer';
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

const Teams = (props: TeamsProps) => {
  const fetchUserTeams: any = () => {
    return fetch(`http://localhost:3001/api/v1/teams/${props.currentUser.id}`)
      .then(response => response.json())
      .then((parsedResponse: any) => {
        return parsedResponse.map((team: any) => {
          return (
            <li className="existing-team">
              <h5>
                {team.team_name}
              </h5>
              <p>
                {team.player_1}
              </p>
              <p>
                {team.player_2}
              </p>
              <p>
                {team.player_3}
              </p>
              <p>
                {team.player_4}
              </p>
              <p>
                {team.player_5}
              </p>
            </li>
          );
        });
      })
      .catch(error => console.log(error));
  };
  return (
    <div className="teams-container">
      <p className="current-user">
        Logged in as: {props.currentUser.username}
      </p>
      <h1>My teams</h1>
      <ul className="teams-list">
        {fetchUserTeams()}
      </ul>
      <NavLink to="/home">Draft a team</NavLink>
    </div>
  );
};

export default TeamsContainer(Teams);
