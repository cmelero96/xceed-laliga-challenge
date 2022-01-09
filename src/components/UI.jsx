import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Wrapper = styled.section`
  width: 90%;
  height: fit-content;
  margin: 10rem 2rem;
  padding: 2rem 0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 #e2e4e5;

  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;

  header {
    font-size: 28px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    color: #3e4b54;
    padding: 0 0 2rem 0;
  }
`;

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
`;
