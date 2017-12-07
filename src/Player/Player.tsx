import * as React from 'react';

const addOrRemovePlayer = (props: any) => {
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
