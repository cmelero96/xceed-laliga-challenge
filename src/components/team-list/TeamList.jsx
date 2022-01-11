import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import token from '../../utils/token';
import { TeamsHolder, TeamLink } from './styled';

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
        <header>Select a team to see its roster</header>
        <TeamsHolder>
          {teams.map((team) => (
            <TeamLink key={team.id} to={`/${team.id}`}>
              {team.name}
            </TeamLink>
          ))}
        </TeamsHolder>
      </>
    );
  }

  return content;
};

export default TeamList;
