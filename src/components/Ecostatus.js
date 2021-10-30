import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  background: white;
  height: 180px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    background: white;
    width: 210px;
    height: 110px;
  }
`

const Ecostatus = () =>{
  return (
    <>
    <div className="eco-header">
        <span>Eco Mode</span>
    </div>
    <ChartWrapper>
      <PieChart
        data = {[
          {
            value: 70.3,
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
        animate
        viewBoxSize = {[100,55]}
        label={({dataEntry}) => dataEntry.value + " %"}
        labelStyle={{
          fontSize: "13px",
          fontWeight: 'bold',
          fill: "#33333"
        }}
        labelPosition={25} // 퍼센트 위치
      />
    </ChartWrapper>
  </>
  )
}

export default Ecostatus;