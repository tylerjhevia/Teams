import * as React from 'react';
import './CurrentSelection.css';
import TeamsContainer from '../containers/TeamsContainer';
import Player from '../Player/Player';
import { CurrentUser } from '../Teams/Teams';

interface CurrentSelectionProps {
  team: Array<String>;
  currentUser: CurrentUser;
}

class CurrentSelection extends React.Component<CurrentSelectionProps, {}> {
  constructor(props: CurrentSelectionProps) {
    super(props);
  }

  render() {
    console.log('cs props', this.props);
    return (
      <section className="current-selection">
        <h3>Current selection:</h3>
        <section className="selected-players">
          {this.props.team.map(player => <Player name={player} />)}
        </section>
        <button className="create-team-button">Create Team</button>
      </section>
    );
  }
}

export default TeamsContainer(CurrentSelection);
