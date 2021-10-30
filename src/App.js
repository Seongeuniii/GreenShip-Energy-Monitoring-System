import styled from 'styled-components';
import Ecostatus from './components/Ecostatus';
import Body from './components/Body';

const Wrapper = styled.div`
  width:330px;
  height:100vh;
  margin-top: 30px;
  background: white;
`


function App() {

  return (
    <Wrapper className="App">
      <Ecostatus/>
      <Body/>
    </Wrapper>
  );
}

export default App;
