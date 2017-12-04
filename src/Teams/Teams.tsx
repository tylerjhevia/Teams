import * as React from 'react';
import TeamsContainer from '../containers/TeamsContainer';
import './Teams.css';

interface TeamsProps {
  currentUser: CurrentUser;
}

interface CurrentUser {
  id: Number;
  username: String;
  password: String;
  created_at: String;
  updated_at: String;
}

const Teams = (props: TeamsProps) => {
  return (
    <div className="teams-container">
      <p className="current-user">
        Logged in as: {props.currentUser.username}
      </p>
      <h1>My teams</h1>
      <ul className="teams-list">
        <li>Team 1</li>
      </ul>
    </div>
  );
};

export default TeamsContainer(Teams);
