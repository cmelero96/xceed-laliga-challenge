import useAxios from 'axios-hooks';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import token from '../../utils/token';
import GenericMessage from '../shared/GenericMessage';
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
    content = <GenericMessage text="Error retrieveng the team list" />;
  } else if (loading) {
    content = <GenericMessage text="Loading teams..." />;
  } else {
    content = (
      <>
        <Header>Select a team to see its roster</Header>
        <TeamsHolder>
          {teams.map((team) => (
            <TeamLink
              key={team.id}
              to={`/${team.id}`}
              state={{ teamName: team.name }}
            >
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

const Header = styled.header`
  padding-bottom: 1em;
  font-family: Avenir;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: #3e4b54;
  font-size: 28px;
`;
