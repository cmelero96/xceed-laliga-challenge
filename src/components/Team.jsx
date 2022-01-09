import { Link, Outlet, useParams } from 'react-router-dom';
import { calculatePlayerAge } from '../utils';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../utils/token';

const Team = () => {
  const { teamId } = useParams();
  const [{ data, loading, error }] = useAxios({
    baseURL: 'https://api.football-data.org/v2',
    url: `/teams/${teamId}`,
    headers: { 'X-Auth-Token': token },
  });
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setPlayers(data.squad);
    }
  }, [data, loading, error]);

  let content;
  if (error) {
    content = <div>Error</div>;
  } else if (loading) {
    content = <div>Loading...</div>;
  } else {
    content = players.map((player) => (
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
