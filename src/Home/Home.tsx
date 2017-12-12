import * as React from 'react';
import './Home.css';
import CurrentSelection from '../CurrentSelection/CurrentSelection';
import TeamsContainer from '../Teams/TeamsContainer';
import Player from '../Player/Player';
import { CurrentUser } from '../Teams/Teams';
import players from '../helpers/NBA-players.js';

interface HomeState {
  selected: Array<String>;
}

interface HomeProps {
  currentUser: CurrentUser;
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: []
    };
    this.addPlayerToTeam = this.addPlayerToTeam.bind(this);
    this.removePlayerFromTeam = this.removePlayerFromTeam.bind(this);
  }

  addPlayerToTeam(player: string) {
    if (this.state.selected.length < 5) {
      this.setState({ selected: [...this.state.selected, player] });
    }
  }

  removePlayerFromTeam(player: String) {
    this.setState({
      selected: this.state.selected.filter(teamMember => teamMember !== player)
    });
  }

  render() {
    console.log('Home props', this.props);
    return (
      <div className="home-container">
        =
        <h1>Home page</h1>
        <div className="players">
          {players.map(player =>
            <Player
              key={player}
              name={player}
              addToTeam={() => this.addPlayerToTeam(player)}
              inSelection={false}
            />
          )}
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
