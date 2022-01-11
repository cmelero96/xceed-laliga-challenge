import styled from 'styled-components';

import searchIconSmall from '../../assets/lens.png';
import searchIconMedium from '../../assets/lens@2x.png';
import searchIconLarge from '../../assets/lens@3x.png';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 2%;
  height: 2em;
  padding: 0 0.5em;
  border-radius: 30px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .magnifier {
    position: relative;
    height: 40%;
  }

  input {
    margin: 0 1em;
    height: 50%;
    background-color: #f7f7f7;
    border: none;
    outline: none;
    font-family: Avenir;
    font-size: 14px;
  }

  @media (max-width: 920px) {
    position: fixed;
    top: unset;
    bottom: 1%;
    width: 40%;
    box-shadow: 0 1px 2px 0 black;

    input {
      flex-basis: 85%;
      margin: 0;
    }
  }
`;

const SearchBar = ({ search, onChange }) => {
  return (
    <Wrapper>
      <img
        className="magnifier"
        src={searchIconSmall}
        srcSet={`${searchIconSmall}, ${searchIconMedium} 2x, ${searchIconLarge} 3x`}
        alt="xceed icon"
      ></img>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={onChange}
      ></input>
    </Wrapper>
  );
};

export default SearchBar;
