import * as React from 'react';
import './Home.css';
import CurrentSelection from '../CurrentSelection/CurrentSelection';
import TeamsContainer from '../Teams/TeamsContainer';
import Player from '../Player/Player';
import { CurrentUser } from '../Teams/Teams';
import players from '../helpers/NBA-players.js';

interface HomeState {
  selected: Array<string>;
  search: string;
}

interface HomeProps {
  currentUser: CurrentUser;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: [],
      search: ''
    };
    this.addPlayerToTeam = this.addPlayerToTeam.bind(this);
    this.removePlayerFromTeam = this.removePlayerFromTeam.bind(this);
  }

  addPlayerToTeam(player: string): void {
    if (this.state.selected.length < 5) {
      this.setState({ selected: [...this.state.selected, player] });
    }
  }

  removePlayerFromTeam(player: string): void {
    this.setState({
      selected: this.state.selected.filter(teamMember => teamMember !== player)
    });
  }

  filterPlayers(players: Array<string>) {
    const { search } = this.state;

    let results = players.filter(player =>
      player.toLowerCase().includes(search.toLowerCase())
    );

    return results.map(player =>
      <Player
        key={player}
        name={player}
        addToTeam={() => this.addPlayerToTeam(player)}
        inSelection={false}
      />
    );
  }

  render() {
    return (
      <div className="home-container">
        <h1>Draft your team</h1>
        <input
          className="search"
          placeholder="Search for a player"
          onChange={(e: any) => {
            this.setState({ search: e.target.value });
          }}
        />
        <div className="players">
          {this.filterPlayers(players)}
        </div>
        <CurrentSelection
          team={this.state.selected}
          removePlayerFromTeam={this.removePlayerFromTeam}
        />
      </div>
    );
  }
}

export default TeamsContainer(Home);
