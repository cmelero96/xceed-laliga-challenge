import { Link } from 'react-router-dom';
import { competition } from '../utils/fakedApiCall';

const TeamList = () => {
  return (
    <>
      {competition.teams.map((team) => (
        <div key={team.id}>
          <Link to={`/${team.id}`}>{team.name}</Link>
        </div>
      ))}
    </>
  );
};

export default TeamList;
