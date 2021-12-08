import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development";
import styled from 'styled-components';

import graphImg from "../img/graph.png";

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .switch-field {
    display: flex;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  .switch-field label {
    background-color: #e4e4e4;
    color: black;
    font-size: 14px;
    display: block;
    width: 60px;
    line-height: 1;
    text-align: center;
    padding: 8px 16px;
    margin-right: -1px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    // box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }

  .switch-field label:hover {
    cursor: pointer;
  }

  .switch-field input:checked + label {
    background-color: #c2e59c;
    box-shadow: none;
  }

  .switch-field label:first-of-type {
    border-radius: 7px 0 0 7px;
  }

  .switch-field label:last-of-type {
    border-radius: 0 7px 7px 0;
  }

  .graph-wrapper {
    background-color: white;
    border-radius: 10px;
    width: 372px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    
  }
  .graph-wrapper:hover {
    transform:scale(1.03); 
  }

  img {
    width: 130%;
  }
`
const Graph = () => {
  const [check, setCheck] = useState(true)
  
  const RadioCheck = (e) => {
    const graph = e.target.value;
    graph == 'pmax' ? setCheck(true) : setCheck(false)
  }

  return (
    <Wrapper>
      <div class="switch-field">
        <input type="radio" id="pmax" name="graph" value="pmax" onChange={RadioCheck} checked={check}/>
        <label for="pmax">Pmax</label>
        <input type="radio" id="ihp" name="graph" value="" onChange={RadioCheck}/>
        <label for="ihp">IHP</label>
        <input type="radio" id="bhp" name="graph" value="" onChange={RadioCheck}/>
        <label for="bhp">BHP</label>
        <input type="radio" id="machine-efficiency" name="graph" value="" onChange={RadioCheck}/>
        <label for="machine-efficiency">Efficiency</label>
      </div>
      <Link to="/pmax">
        <div className="graph-wrapper" >
          <img src={graphImg} alt=""/>
        </div>
      </Link>
    </Wrapper>
  )
}

export default Graph;