import styled from 'styled-components';
import { AppHeader } from '../shared/styled.js';

export const Header = styled(AppHeader)`
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
    left: 5%;
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
`;

export const TableRow = styled.div`
  display: block;
  padding-left: 5%;
  margin: 1em 0;

  .col {
    display: inline-block;
    width: 25%;
    text-align: left;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 300;
  }

  &.header {
    font-size: 14px;
    color: #b6babd;

    .col:hover {
      outline: 1px solid lightgray;
      border-radius: 1px;
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
  color: #b6babd;
`;
