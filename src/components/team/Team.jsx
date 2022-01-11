import { useParams } from 'react-router-dom';
import {
  calculatePlayerAge,
  filterPlayersByText,
  sortElementsByField,
} from '../../utils';
import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../../utils/token';
import TeamContent from './TeamContent';
import TeamHeader from './TeamHeader';
import { playerFields, playersDisplayed } from '../../utils/constants';

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
  const [sortingField, setSortingField] = useState(playerFields[0]);
  const [reverseSort, setReverseSort] = useState(false);
  const [maxRows, setMaxRows] = useState(playersDisplayed);
  const [search, setSearch] = useState('');

  const buttonVisible = displayPlayers.length < filteredPlayers.length;

  // Toggle the reverseSort variable if clicking on the same field; otherwise don't reverse
  const configSort = (field) => {
    setReverseSort((current) => (field === sortingField ? !current : false));
    setSortingField(field);
  };

  const changeSearchTerm = (event) => {
    setSearch(event.target.value);
  };

  const updateRows = () => {
    setMaxRows((current) => current + playersDisplayed);
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
      <TeamContent
        players={displayPlayers}
        buttonVisible={buttonVisible}
        highlightField={sortingField}
        updateRows={updateRows}
        configSort={configSort}
      ></TeamContent>
    );
  }

  return (
    <>
      <TeamHeader
        teamName={teamName}
        search={search}
        onUpdateSearch={changeSearchTerm}
      ></TeamHeader>
      {content}
    </>
  );
};

export default Team;
