import * as React from 'react';
import './Home.css';
import CurrentSelection from '../CurrentSelection/CurrentSelection';
import TeamsContainer from '../containers/TeamsContainer';
import Player from '../Player/Player';
import players from '../helpers/NBA-players.js';

interface HomeState {
  selected: Array<String>;
}

class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: []
    };
    this.addPlayerToTeam = this.addPlayerToTeam.bind(this);
  }

  addPlayerToTeam(player: string) {
    if (this.state.selected.length < 5) {
      this.setState({ selected: [...this.state.selected, player] });
    }
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <div className="players">
          {players.map(player =>
            <Player
              key={player}
              name={player}
              addToTeam={() => this.addPlayerToTeam(player)}
            />
          )}
        </div>
        <CurrentSelection team={this.state.selected} />
      </div>
    );
  }
}

export default TeamsContainer(Home);
