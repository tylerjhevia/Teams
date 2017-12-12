import * as React from 'react';
import './SingleTeam.css';

interface SingleTeamProps {
  team: Team;
}

interface Team {
  user_id: Number;
  team_name: string;
  player_1: string;
  player_2: string;
  player_3: string;
  player_4: string;
  player_5: string;
}

const SingleTeam = (props: SingleTeamProps) => {
  const { team } = props;
  return (
    <li className="existing-team">
      <h5 className="team-name">
        {team.team_name}
      </h5>
      <p>
        {team.player_1}
      </p>
      <p>
        {team.player_2}
      </p>
      <p>
        {team.player_3}
      </p>
      <p>
        {team.player_4}
      </p>
      <p>
        {team.player_5}
      </p>
    </li>
  );
};

export default SingleTeam;
