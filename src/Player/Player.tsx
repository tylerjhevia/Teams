import * as React from 'react';
import './Player.css';

const addOrRemovePlayer = (props: any): void => {
  if (props.addToTeam) {
    props.addToTeam(props.name);
  } else {
    props.removePlayerFromTeam(props.name);
  }
};

const Player = (props: any) => {
  return (
    <p className="player" onClick={() => addOrRemovePlayer(props)}>
      {props.name}
    </p>
  );
};

export default Player;
