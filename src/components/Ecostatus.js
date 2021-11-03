import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';
import arrow from '../img/arrow.png'

const ChartWrapper = styled.div`
  background: white;
  height: 180px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  .arrowimg {
    background: #beddcc;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    top: 150px;
    position: absolute;
    img {
      margin-top: 2px;
      width: 28px;
      height: 28px;
    }
  }

  .eco-status {
    top: 220px;
    font-weight: bold;
    position: absolute;
    font-size: 10px;
  }

  svg {
    background: white;
    width: 220px;
    height: 120px;
    margin-bottom: 13px;
  }
`

const Ecostatus = () =>{
  return (
    <>
    <div className="eco-header">
        <span>Eco Mode</span>
    </div>
    <ChartWrapper>
      <div className='arrowimg'><img src={arrow} alt='arrow'/></div>
      <div className="eco-status">ECO-MODE currently in good condition.</div>
      <PieChart
        data = {[
          {
            value: 92.3,
            color: "green",
            name: "name1",
          }
        ]}
        reveal={70} // 퍼센트 치수
        lineWidth={10} // 도넛 두께
        background="#e8f8f0"
        startAngle={180}
        lengthAngle={180}
        rounded
        animategh
        viewBoxSize = {[100,55]}
        label={({dataEntry}) => dataEntry.value + " %"}
        labelStyle={{
          fontSize: "11px",
          fontWeight: 'bold',
          fill: "#33333"
        }}
        labelPosition={12} // 퍼센트 위치
      />
    </ChartWrapper>
  </>
  )
}

export default Ecostatus;