import { useState } from 'react';
import { MENUS } from '../utils/constants';
import Team from './Team';
import TeamList from './TeamList';

const MainContainer = () => {
  const [component, setComponent] = useState(MENUS.teamList);
  const [team, setTeam] = useState(0);

  const showTeam = (teamId) => {
    console.log('showTeam');
    setComponent(MENUS.teamPlayers);
    // setTeam(teamId);
    setTeam(86);
  };

  const showTeamList = () => {
    setComponent(MENUS.teamList);
    setTeam(0);
  };

  if (component === MENUS.teamList) {
    // Display the list of teams
    return <TeamList onTeamClicked={showTeam}></TeamList>;
  } else if (component === MENUS.teamPlayers) {
    // Display the list of players for a team
    return (
      <>
        <Team id={team}></Team>
        <button onClick={showTeamList}>Go back</button>
      </>
    );
  } else {
    // Error state
    return <div>Error</div>;
  }
};

export default MainContainer;
