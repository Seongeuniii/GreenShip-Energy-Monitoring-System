import { useState } from "react";
import styled from "styled-components";

import g1 from "../img/10Knot1.png";
import g11 from "../img/10Knot2.png";
import g2 from "../img/12Knot1.png";
import g22 from "../img/12Knot2.png";
import g3 from "../img/251.png";
import g33 from "../img/252.png";
import g4 from "../img/501.png";
import g44 from "../img/502.png";
import g5 from "../img/651.png";
import g55 from "../img/652.png";

const Wrapper = styled.div`
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
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    display: block;
    width: 41px;
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

  img {
    width: 90%;
  }
`

const Pmax = () => {
  const [graph1, setGraph1] = useState(g1)
  const [graph2, setGraph2] = useState(g11)
  const [check, setCheck] = useState(true)

  const dic = {
    '10': [g1,g11],
    '20': [g2,g22],
    '25': [g3,g33],
    '50': [g4,g44],
    '65': [g5,g55],
  }
  const RadioCheck = (e) => {
    const graph = e.target.value;
    graph == '10' ? setCheck(true) : setCheck(false)

    setGraph1(dic[graph][0])
    setGraph2(dic[graph][1])
  }

  return(
    <Wrapper>
      <h1>Pmax</h1>
      <div class="switch-field">
        <input type="radio" id="10Knot" name="pmax" value="10" onChange={RadioCheck} checked={check}/>
        <label for="10Knot">10Knot</label>
        <input type="radio" id="20Knot" name="pmax" value="20" onChange={RadioCheck} />
        <label for="20Knot">20Knot</label>
        <input type="radio" id="25%" name="pmax" value="25" onChange={RadioCheck} />
        <label for="25%">25%</label>
        <input type="radio" id="50%" name="pmax" value="50" onChange={RadioCheck}/>
        <label for="50%">50%</label>
        <input type="radio" id="60%" name="pmax" value="65"onChange={RadioCheck}/>
        <label for="60%">65%</label>
      </div>
      <img src={graph1} alt="" />
      <img src={graph2} alt="" style={{margin: '15px'}}/>
    </Wrapper>
  )
}

export default Pmax;