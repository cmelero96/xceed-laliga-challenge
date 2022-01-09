import { Link, Outlet, useParams } from 'react-router-dom';
import { teams } from '../utils/fakedApiCall';
import { calculatePlayerAge } from '../utils';

const Team = () => {
  const { teamId } = useParams();

  const teamData = teams.find((team) => team.id === +teamId);

  let content;
  if (!teamData) {
    content = <div>Team data not found</div>;
  } else {
    content = teamData.squad.map((player) => (
      <div key={player.id}>
        <span>{player.name} | </span>
        <span>{player.nationality} | </span>
        <span>{player.position} | </span>
        <span>{calculatePlayerAge(player)}</span>
      </div>
    ));
  }

  return (
    <section>
      {content}
      <Outlet></Outlet>
      <Link to={'/'}>Go back</Link>
    </section>
  );
};

export default Team;
