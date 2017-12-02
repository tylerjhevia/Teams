import * as React from 'react';
import './Home.css';
import Teams from '../Teams/Teams';
import players from '../helpers/NBA-players.js';

export default class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  addPlayerToTeam(player: string) {
    console.log('player', player);
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <Teams />
        <div className="players">
          {players.map(player =>
            <p key={player} onClick={() => this.addPlayerToTeam(player)}>
              {player}
            </p>
          )}
        </div>
      </div>
    );
  }
}
