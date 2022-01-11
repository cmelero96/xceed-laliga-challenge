import { GoBackLink, Header } from './styled.js';
import SearchBar from './SearchBar.jsx';

const TeamHeader = ({ teamName, search, onUpdateSearch }) => {
  return (
    <Header>
      <SearchBar search={search} onChange={onUpdateSearch}></SearchBar>
      <h2>{teamName}</h2>
      <GoBackLink className="back-button" to={'/'}>
        Go back
      </GoBackLink>
    </Header>
  );
};

export default TeamHeader;
