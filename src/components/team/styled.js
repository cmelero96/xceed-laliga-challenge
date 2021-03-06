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

  .back-button {
    position: absolute;
    right: 4%;
  }

  @media (max-width: 920px) {
    justify-content: flex-start;
    padding: 0;

    h2 {
      padding-left: 2em;
    }
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

  @media (max-width: 920px) {
    .col {
      padding-right: 0.2em;
    }

    &.header .col {
      font-size: 12px;
    }

    &.row .col {
      font-size: 16px;
    }
  }
`;

export const SeeMoreButton = styled.button`
  background-color: initial;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  color: #b6babd;

  @media (max-width: 920px) {
    font-size: 12px;
  }
`;

export const GoBackLink = styled(Link)`
  padding: 0.5em 1em;
  flex: 1 0 18%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    font-size: 12px;
    flex: 1 0 25%;
  }
`;
