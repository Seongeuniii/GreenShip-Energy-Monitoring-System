import styled from 'styled-components';
import Pressure from './Pressure';
import Thermal from './Thermal';
import Mechanical from './Mechanical';

const BodyWrapper = styled.div`
  height: 190px;
  font-size: 15px;

  .bodyheader {
   font-size: 15px;
   color: rgb(184, 177, 177);
   font-weight: bold;
   margin: 10px 10px 10px 5px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style:none;
    white-space:nowrap; 
    overflow-x: auto;
  }
  li{
    margin-right: 20px;
    display:inline-block;
  }
`

const Body = () => {
  return (
    <BodyWrapper>
      <div className="bodyheader">
        <span>Today's Status</span>
      </div>
      <ul>
        <li><Pressure/></li>
        <li><Thermal/></li>
        <li><Mechanical/></li>
      </ul>
    </BodyWrapper>  
  )
}

export default Body;