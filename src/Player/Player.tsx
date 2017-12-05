import * as React from 'react';

const Player = (props: any) => {
  return (
    <p className="player" onClick={() => props.addToTeam(props.name)}>
      {props.name}
    </p>
  );
};

export default Player;
