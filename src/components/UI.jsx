import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppHeader = styled.header`
  width: 100%;
  height: 7.5rem;
  border: solid 1px #979797;
  background-color: #fff;
  display: flex;
  align-items: center;

  .xceed-icon {
    position: absolute;
    left: 5%;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;

    h1 {
      width: 361px;
      height: 26px;
      font-family: Avenir;
      font-size: 28px;
      font-weight: 900;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.93;
      letter-spacing: normal;
      color: #3e4b54;
    }
  }

  @media (max-width: 920px) {
    height: 5.8rem;
    align-items: flex-end;

    .xceed-icon {
      width: 5rem;
      left: 2%;
      top: 1rem;
    }

    div > h1 {
      font-size: 24px;
      text-align: center;
    }
  }
`;

export const InfoWrapper = styled.section`
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

  @media (max-width: 920px) {
    width: 100%;
    margin: 4rem 0;
    font-size: 16px;
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
  text-decoration: none;

  @media (max-width: 920px) {
    flex: 1 0 25%;
  }
`;
