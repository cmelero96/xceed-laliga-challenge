import { Outlet, useParams } from 'react-router-dom';
import { calculatePlayerAge } from '../utils';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../utils/token';
import { AppHeader, TableRow } from './UI';

const Team = () => {
  const { teamId } = useParams();
  const [{ data, loading, error }] = useAxios({
    baseURL: 'https://api.football-data.org/v2',
    url: `/teams/${teamId}`,
    headers: { 'X-Auth-Token': token },
  });
  const [players, setPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    if (!loading && !error) {
      setPlayers(data.squad);
      setTeamName(data.name);
    }
  }, [data, loading, error]);

  let content;
  if (error) {
    content = <div>Error</div>;
  } else if (loading) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <>
        <TableRow className="header">
          <span className="col">NAME</span>
          <span className="col">NATIONALITY</span>
          <span className="col">POSITION</span>
          <span className="col small">AGE</span>
        </TableRow>
        {players.map((player) => (
          <TableRow key={player.id} className="row">
            <span className="col highlighted">{player.name}</span>
            <span className="col">{player.nationality}</span>
            <span className="col">{player.position}</span>
            <span className="col small">{calculatePlayerAge(player)}</span>
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <>
      <AppHeader>
        <h2>{teamName}</h2>
      </AppHeader>
      {content}
      <Outlet></Outlet>
    </>
  );
};

export default Team;
