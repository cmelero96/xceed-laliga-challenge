import { Route, Routes } from 'react-router-dom';
import Team from './Team';
import TeamList from './TeamList';
import { Wrapper } from './UI';

const MainContainer = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<TeamList />}></Route>
        <Route path=":teamId" element={<Team />}></Route>
      </Routes>
    </Wrapper>
  );
};

export default MainContainer;
