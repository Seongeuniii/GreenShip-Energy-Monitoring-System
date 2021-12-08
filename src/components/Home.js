import { Link } from "react-router-dom"
import styled from 'styled-components';

import spanner from '../img/spanner.png';
import Graph from "./Graph";
import week from "../img/week.png";

const Wrapper = styled.div`
  width:380px;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .day {
    font-size: 30px;
    color: #444442;
    display: flex;
    align-items: center;
    justify-content: center;
    }

  .daywork-wrapper {
    background-color: white;
    border-radius: 10px;
    margin-top: 15px;
    width: 372px;
    height: 70px;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  .comments-wrapper {
    background-color: white;
    margin-top: 15px;
    width: 414px;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    // align-items: center;
    // justify-content: center;

  }
  .comments-title {
    height: 40px;
    font-size: 18px;
    color: green;
    margin-top: 10px;
    margin-left: 10px;
  }
  .comments-content {
    height: 40px;
    border-top: 1px solid #cec9c9;
    padding-top: 10px;
    font-size: 13px;
    color: black;
    margin-left: 10px;
  }

`
const Home = () => {
  return(
    <Wrapper>
      <div className="day">
        <div style={{marginBottom:'2px'}}>Appnergy</div>
        <img src={spanner} alt="" style={{width: '25px', marginLeft:'7px'}}/>
      </div>

        <Graph/>
        
        <div className="daywork-wrapper">
          <Link to='/daywork'>
            <div className="comments-title" style={{position: 'fixed', marginLeft: "7px", marginTop:"2px", fontSize:"16px"}}>Daywork</div>
            <img src={week} alt="" style={{height: '100%', marginLeft:"16px"}}/>
          </Link>
        </div>

        <Link to='/chat' style={{textDecoration: 'none'}}>
          <div className="comments-wrapper">
            
            <div className="comments-title">comments</div>
            <div className="comments-content">
              <span>Chief Engineer</span>
              <span style={{marginLeft: "227px", color:"gray"}}>2021.12.05</span>
            </div>
            <div className="comments-content">
              <span>1st Engineer</span>
              <span style={{marginLeft: "240px", color:"gray"}}>2021.12.03</span>
            </div>
            <div className="comments-content">
              <span>2nd Engineer</span>
              <span style={{marginLeft: "235px", color:"gray"}}>2021.12.08</span>
            </div>
          </div>
        </Link>
    </Wrapper>
  )
}

export default Home