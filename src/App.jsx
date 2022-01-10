import './App.css';
import MainContainer from './components/MainContainer';
import styled from 'styled-components';
import ligaLogoSmall from './assets/liga-background.png';
import ligaLogoMedium from './assets/liga-background@2x.png';
import ligaLogoLarge from './assets/liga-background@3x.png';
import xceedLogoSmall from './assets/xceed-logo-black.png';
import xceedLogoMedium from './assets/xceed-logo-black@2x.png';
import xceedLogoLarge from './assets/xceed-logo-black@3x.png';
import { AppHeader } from './components/UI';

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

function App() {
  return (
    <AppWrapper className="App">
      <AppHeader className="main-header">
        <img
          className="xceed-icon"
          src={xceedLogoSmall}
          srcSet={`${xceedLogoSmall}, ${xceedLogoMedium} 2x, ${xceedLogoLarge} 3x`}
          alt="xceed icon"
        ></img>
        <h1>Xceed Liga Challenge 2021</h1>
      </AppHeader>
      <MainContainer></MainContainer>
    </AppWrapper>
  );
}

export default App;
