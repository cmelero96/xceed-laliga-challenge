import { Outlet, useParams } from 'react-router-dom';
import { calculatePlayerAge, sortElementsByField } from '../utils';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../utils/token';
import { AppHeader, TableRow } from './UI';

const fields = ['name', 'nationality', 'position', 'age'];
const rowStep = 3;

const Team = () => {
  const { teamId } = useParams();
  const [{ data, loading, error }] = useAxios({
    baseURL: 'https://api.football-data.org/v2',
    url: `/teams/${teamId}`,
    headers: { 'X-Auth-Token': token },
  });
  const [players, setPlayers] = useState([]);
  const [displayPlayers, setDisplayPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [sortingField, setSortingField] = useState(fields[0]);
  const [reverseSort, setReverseSort] = useState(false);
  const [maxRows, setMaxRows] = useState(rowStep);

  const displayButton = displayPlayers.length < players.length;

  // Toggle the reverseSort variable if clicking on the same field; otherwise don't reverse
  const configSort = (field) => {
    setReverseSort((current) => (field === sortingField ? !current : false));
    setSortingField(field);
  };

  // Update the component state when the API response is updated
  useEffect(() => {
    if (!loading && !error) {
      setPlayers(
        data.squad.map((player) => ({
          id: player.id,
          name: player.name,
          nationality: player.nationality,
          position: player.position,
          age: calculatePlayerAge(player),
        }))
      );
      setTeamName(data.name);
      setMaxRows(rowStep);
    }
  }, [data, loading, error]);

  // Sort the displayed players whenever we change our sorting configuration
  useEffect(() => {
    setDisplayPlayers(
      sortElementsByField(players, sortingField, reverseSort).slice(0, maxRows)
    );
  }, [players, sortingField, reverseSort, maxRows]);

  let content;
  if (error) {
    content = <div>Error</div>;
  } else if (loading) {
    content = <div>Loading...</div>;
  } else {
    content = (
      <>
        <TableRow className="header">
          {fields.map((field) => (
            <div key={field} className="col" onClick={() => configSort(field)}>
              {field.toUpperCase()}
            </div>
          ))}
        </TableRow>
        {displayPlayers.map((player) => (
          <TableRow key={player.id} className="row">
            {fields.map((field) => (
              <div key={field} className="col">
                {player[field]}
              </div>
            ))}
          </TableRow>
        ))}
        {displayButton && (
          <button onClick={() => setMaxRows((n) => n + rowStep)}>
            SEE MORE
          </button>
        )}
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
