import { Route, Routes } from 'react-router-dom';
import Team from './Team';
import TeamList from './TeamList';

const MainContainer = () => {
  return (
    <div className="container" style={{ border: '1px solid black' }}>
      <Routes>
        <Route path="/" element={<TeamList />}></Route>
        <Route path=":teamId" element={<Team />}></Route>
      </Routes>
    </div>
  );
};

export default MainContainer;
