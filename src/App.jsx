import './App.css';
import styled from 'styled-components';
import ligaLogoSmall from './assets/liga-background.png';
import ligaLogoMedium from './assets/liga-background@2x.png';
import ligaLogoLarge from './assets/liga-background@3x.png';
import xceedLogoSmall from './assets/xceed-logo-black.png';
import xceedLogoMedium from './assets/xceed-logo-black@2x.png';
import xceedLogoLarge from './assets/xceed-logo-black@3x.png';
import { Route, Routes } from 'react-router-dom';
import Team from './components/team/Team';
import TeamList from './components/team-list/TeamList';
import { AppHeader } from './components/shared/styled';

const App = () => {
  return (
    <AppWrapper className="App">
      <MainHeader className="main-header">
        <img
          className="xceed-icon"
          src={xceedLogoSmall}
          srcSet={`${xceedLogoSmall}, ${xceedLogoMedium} 2x, ${xceedLogoLarge} 3x`}
          alt="xceed icon"
        ></img>
        <h1>Xceed Liga Challenge 2021</h1>
      </MainHeader>
      <MainContainer>
        <Routes>
          <Route path="/" element={<TeamList />}></Route>
          <Route path=":teamId" element={<Team />}></Route>
        </Routes>
      </MainContainer>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1382px;
  background-image: image-set(
    url(${ligaLogoSmall}) 1x,
    url(${ligaLogoMedium}) 2x,
    url(${ligaLogoLarge}) 3x
  );
  background-repeat: no-repeat;
  background-color: #f4f4f4;
  background-size: contain;
`;

const MainHeader = styled(AppHeader)`
  height: 7.5rem;
  border: solid 1px #979797;
  background-color: #fff;

  .xceed-icon {
    position: absolute;
    left: 5%;
  }

  h1 {
    width: 361px;
    height: 26px;
    font-size: 28px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: normal;
    color: #3e4b54;
  }

  @media (max-width: 920px) {
    height: 5.8rem;
    align-items: flex-end;

    .xceed-icon {
      width: 5rem;
      left: 2%;
      top: 1rem;
    }

    div > h1 {
      font-size: 24px;
      text-align: center;
    }
  }
`;

const MainContainer = styled.section`
  width: 90%;
  height: fit-content;
  margin: 10rem 2rem;
  padding: 2rem 0;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 #e2e4e5;

  text-align: center;
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;

  @media (max-width: 920px) {
    width: 100%;
    margin: 4rem 0;
    padding: 1rem 0;
    font-size: 16px;
  }
`;
