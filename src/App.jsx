import './App.css';
import MainContainer from './components/MainContainer';
import styled from 'styled-components';
import logoSmall from './assets/liga-background.png';
import logoMedium from './assets/liga-background@2x.png';
import logoLarge from './assets/liga-background@3x.png';

const AppWrapper = styled.div`
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

function App() {
  return (
    <AppWrapper className="App">
      <MainContainer></MainContainer>
    </AppWrapper>
  );
}

export default App;
