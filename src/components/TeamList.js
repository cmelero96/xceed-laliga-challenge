import { competition } from '../utils/fakedApiCall';

const TeamList = ({ onTeamClicked }) => {
  return (
    <>
      {competition.teams.map((team) => (
        <div key={team.id} onClick={() => onTeamClicked(team.id)}>
          {team.name}
        </div>
      ))}
    </>
  );
};

export default TeamList;
