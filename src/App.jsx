import './App.css';
import MainContainer from './components/MainContainer';
import styled from 'styled-components';
import logoSmall from './assets/liga-background.png';
import logoMedium from './assets/liga-background@2x.png';
import logoLarge from './assets/liga-background@3x.png';

const AppWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 1382px;
  background-image: image-set(
    url(${logoSmall}) 1x,
    url(${logoMedium}) 2x,
    url(${logoLarge}) 3x
  );
  background-repeat: no-repeat;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  width: 100%;
  height: 119px;
  border: solid 1px #979797;
  background-color: #fff;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header></Header>
      <MainContainer></MainContainer>
    </AppWrapper>
  );
}

export default App;
