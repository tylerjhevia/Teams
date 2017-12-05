import * as React from 'react';

const Player = (props: any) => {
  return (
    <p className="player">
      {props.name}
    </p>
  );
};

export default Player;
