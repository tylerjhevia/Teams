import * as React from 'react';
import './CurrentSelection.css';
import TeamsContainer from '../containers/TeamsContainer';

class CurrentSelection extends React.Component {
  constructor(props: any) {
    super({});
  }
  render() {
    return (
      <section className="current-selection">
        <h3>Current selection:</h3>
        <ol className="selected-players" />
      </section>
    );
  }
}

export default TeamsContainer(CurrentSelection);
