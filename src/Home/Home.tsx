import * as React from 'react';
import './Home.css';
import TeamsContainer from '../containers/TeamsContainer';
import players from '../helpers/NBA-players.js';

class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  addPlayerToTeam(player: string) {}

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
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

export default TeamsContainer(Home);
