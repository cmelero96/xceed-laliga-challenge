import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import token from '../utils/token';

const TeamList = () => {
  const [{ data, loading, error }] = useAxios({
    baseURL: 'https://api.football-data.org/v2',
    url: '/competitions/2014/teams',
    headers: { 'X-Auth-Token': token },
  });
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setTeams(data.teams);
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
        {teams.map((team) => (
          <div key={team.id}>
            <Link to={`/${team.id}`}>{team.name}</Link>
          </div>
        ))}
      </>
    );
  }

  return content;
};

export default TeamList;
