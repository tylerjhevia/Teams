import * as React from 'react';
import './Home.css';
import players from '../helpers/NBA-players.js';

export default class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <div className="players">
          {players.map(player =>
            <p key={player}>
              {player}
            </p>
          )}
        </div>
      </div>
    );
  }
}
