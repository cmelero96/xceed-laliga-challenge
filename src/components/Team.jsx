import { Outlet, useParams } from 'react-router-dom';
import {
  calculatePlayerAge,
  filterPlayersByText,
  sortElementsByField,
} from '../utils';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../utils/token';
import { AppHeader, SeeMoreButton, TableRow } from './UI';
import searchIconSmall from '../assets/lens.png';
import searchIconMedium from '../assets/lens@2x.png';
import searchIconLarge from '..//assets/lens@3x.png';

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
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [displayPlayers, setDisplayPlayers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [sortingField, setSortingField] = useState(fields[0]);
  const [reverseSort, setReverseSort] = useState(false);
  const [maxRows, setMaxRows] = useState(rowStep);
  const [search, setSearch] = useState('');

  const displayButton = displayPlayers.length < filteredPlayers.length;

  // Toggle the reverseSort variable if clicking on the same field; otherwise don't reverse
  const configSort = (field) => {
    setReverseSort((current) => (field === sortingField ? !current : false));
    setSortingField(field);
  };

  const changeSearchTerm = (event) => {
    setSearch(event.target.value);
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

  useEffect(() => {
    setFilteredPlayers(filterPlayersByText(players, search));
  }, [players, search]);

  // Sort the displayed players whenever we change our sorting configuration
  useEffect(() => {
    setDisplayPlayers(
      sortElementsByField(filteredPlayers, sortingField, reverseSort).slice(
        0,
        maxRows
      )
    );
  }, [filteredPlayers, sortingField, reverseSort, maxRows]);

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
          <SeeMoreButton onClick={() => setMaxRows((n) => n + rowStep)}>
            SEE MORE
          </SeeMoreButton>
        )}
      </>
    );
  }

  return (
    <>
      <AppHeader>
        <div className="searchbar">
          <img
            className="magnifier"
            src={searchIconSmall}
            srcSet={`${searchIconSmall}, ${searchIconMedium} 2x, ${searchIconLarge} 3x`}
            alt="xceed icon"
          ></img>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={changeSearchTerm}
          ></input>
        </div>
        <h2>{teamName}</h2>
      </AppHeader>
      {content}
      <Outlet></Outlet>
    </>
  );
};

export default Team;
