import styled from 'styled-components';
import spanner from './img/spanner.png'
import Ecostatus from './components/Ecostatus';
import Body from './components/Body';
import Footer from './components/Footer';

const Wrapper = styled.div`
  width:330px;
  height:100vh;
  margin-top: 30px;
  background: #f1f1f1;

  .appname {
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }

    span {
      margin-bottom: 120px;
    }
  }

  .eco-header {
    font-size: 15px;
    font-weight: bold;
    color: rgb(184, 177, 177);
    margin: 10px 10px 10px 5px;
   }
`


function App() {

  return (
    <>
    <Wrapper>
      <div className="appname"><img src={spanner} alt="spanner"/><span>Appnergy</span></div>
      <Ecostatus/>
      <Body/>
      <Footer/>
    </Wrapper>
    </>
  );
}

export default App;
