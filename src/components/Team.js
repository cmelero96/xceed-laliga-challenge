import { Outlet, useParams } from 'react-router-dom';

const Team = () => {
  const { teamId } = useParams();
  return (
    <>
      <div>{teamId}</div>
      <Outlet></Outlet>
    </>
  );
};

export default Team;
