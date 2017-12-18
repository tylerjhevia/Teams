import * as React from 'react';
import './CurrentSelection.css';
import TeamsContainer from '../Teams/TeamsContainer';
import Player from '../Player/Player';
import { CurrentUser } from '../Teams/Teams';

interface CurrentSelectionProps {
  team: Array<string>;
  currentUser: CurrentUser;
  removePlayerFromTeam: Function;
  toggleCurrentSelection: Function;
}

interface CurrentSelectionState {
  teamName: string;
  error: string;
}

interface Team {
  team_name: string;
  player_1: string;
  player_2: string;
  player_3: string;
  player_4: string;
  player_5: string;
  user_id: number;
}

class CurrentSelection extends React.Component<
  CurrentSelectionProps,
  CurrentSelectionState
> {
  constructor(props: CurrentSelectionProps) {
    super(props);
    this.state = {
      teamName: '',
      error: ''
    };
  }

  postNewTeam(): Promise<void> | void {
    const { team, currentUser } = this.props;
    const player_1 = team[0];
    const player_2 = team[1];
    const player_3 = team[2];
    const player_4 = team[3];
    const player_5 = team[4];

    const newTeam = {
      team_name: this.state.teamName,
      player_1: player_1,
      player_2: player_2,
      player_3: player_3,
      player_4: player_4,
      player_5: player_5,
      user_id: currentUser.id
    };

    if (this.checkIfValidTeam(newTeam)) {
      this.setState({ error: '' });
      return fetch('http://localhost:3001/api/v1/teams', {
        method: 'POST',
        body: JSON.stringify(newTeam),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(parsedResponse => console.log('ok', parsedResponse))
        .catch(error => console.log({ error }));
    } else {
      this.setState({ error: 'Missing field' });
    }
  }

  checkIfValidTeam(team: Team): boolean {
    let teamKeys = Object.keys(team);

    for (let i = 0; i < teamKeys.length; i++) {
      if (!team[teamKeys[i]]) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <section className="current-selection">
        <button
          className="collapse"
          onClick={() => this.props.toggleCurrentSelection()}
        >
          V
        </button>
        <section className="team-info">
          <h3>Current selection:</h3>
          <p className="error-text">
            {this.state.error}
          </p>
          <input
            className="team-name"
            placeholder="Enter team name..."
            onChange={(e: any) => this.setState({ teamName: e.target.value })}
          />
          <section className="selected-players">
            {this.props.team.map((player, i) =>
              <Player
                key={i}
                removePlayerFromTeam={this.props.removePlayerFromTeam}
                name={player}
                inSelection={true}
              />
            )}
          </section>
          <button
            className="create-team-button"
            onClick={(): void | Promise<void> => this.postNewTeam()}
          >
            Create Team
          </button>
        </section>
      </section>
    );
  }
}

export default TeamsContainer(CurrentSelection);
