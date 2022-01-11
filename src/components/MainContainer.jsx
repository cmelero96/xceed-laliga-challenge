import { Route, Routes } from 'react-router-dom';
import Team from './team/Team';
import TeamList from './team-list/TeamList';
import { InfoWrapper } from './shared/styled.js';

const MainContainer = () => {
  return (
    <InfoWrapper>
      <Routes>
        <Route path="/" element={<TeamList />}></Route>
        <Route path=":teamId" element={<Team />}></Route>
      </Routes>
    </InfoWrapper>
  );
};

export default MainContainer;
