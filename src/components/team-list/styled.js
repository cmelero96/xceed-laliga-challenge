import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TeamsHolder = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

export const TeamLink = styled(Link)`
  height: 4em;
  flex: 1 0 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #46555e;
  text-decoration: none;

  @media (max-width: 920px) {
    flex: 1 0 25%;
  }
`;
