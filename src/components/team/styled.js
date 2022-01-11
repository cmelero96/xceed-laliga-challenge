import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppHeader } from '../shared/styled.js';

export const Header = styled(AppHeader)`
  position: relative;

  h2 {
    font-size: 20px;
    font-weight: 900;
    font-stretch: normal;
    font-style: oblique;
    line-height: 1.3;
    letter-spacing: normal;
    color: #46555e;
  }

  .searchbar {
    position: absolute;
    left: 2%;
    height: 2em;
    padding: 0 0.5em;
    border-radius: 30px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input {
      margin: 0 1em;
      height: 50%;
      background-color: #f7f7f7;
      border: none;
      outline: none;
      font-family: 'Avenir';
      font-size: 14px;
    }
  }

  .back-button {
    position: absolute;
    right: 4%;
  }
`;

export const Table = styled.table`
  width: 100%;
  padding-left: 5%;
  border-spacing: 0 0.8em;
`;

export const TableRow = styled.tr`
  padding: 1em 0;

  .col {
    text-align: left;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 300;
    width: 30%;
  }

  &.header {
    font-size: 14px;
    color: #b6babd;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    line-height: 2em;

    .col:hover {
      cursor: pointer;
    }
  }

  &.row {
    color: #46555e;

    .col {
      font-size: 20px;
    }

    .col.highlighted {
      font-weight: 900;
      font-style: oblique;
    }
  }
`;

export const SeeMoreButton = styled.button`
  background-color: initial;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Avenir';
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  color: #b6babd;
`;

export const GoBackLink = styled(Link)`
  padding: 0.5em 1em;
  flex: 1 0 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Avenir';
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: #b6babd;

  @media (max-width: 920px) {
    flex: 1 0 25%;
  }
`;
