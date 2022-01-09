import { Route, Routes } from 'react-router-dom';
import Team from './Team';
import TeamList from './TeamList';
import { InfoWrapper } from './UI';

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
