import { GoBackLink, Header } from './styled.js';

import searchIconSmall from '../../assets/lens.png';
import searchIconMedium from '../../assets/lens@2x.png';
import searchIconLarge from '../../assets/lens@3x.png';

const TeamHeader = ({ teamName, search, onUpdateSearch }) => {
  return (
    <Header>
      <div className="searchbar">
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
          onChange={onUpdateSearch}
        ></input>
      </div>
      <h2>{teamName}</h2>
      <GoBackLink className="back-button" to={'/'}>
        Go back
      </GoBackLink>
    </Header>
  );
};

export default TeamHeader;
