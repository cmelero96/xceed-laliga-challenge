import { Route, Routes } from 'react-router-dom';
import Team from './Team';
import TeamList from './TeamList';

const MainContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<TeamList></TeamList>}></Route>
      <Route path=":teamId" element={<Team></Team>}></Route>
    </Routes>
  );
};

export default MainContainer;
