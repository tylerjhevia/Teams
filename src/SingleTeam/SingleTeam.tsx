import * as React from 'react';

interface SingleTeamProps {
  team: Team;
}

interface Team {
  user_id: Number;
  team_name: String;
  player_1: String;
  player_2: String;
  player_3: String;
  player_4: String;
  player_5: String;
}

const SingleTeam = (props: SingleTeamProps) => {
  console.log('single props', props);
  const { team } = props;
  return (
    <li className="existing-team">
      <h5>
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
