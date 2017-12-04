import * as React from 'react';
import TeamsContainer from '../containers/TeamsContainer';
import './Teams.css';

const Teams = (props: Object) => {
  return (
    <div className="teams-container">
      <h1>My teams</h1>
    </div>
  );
};

export default TeamsContainer(Teams);
