import thermal from '../img/thermal.png'

const Thermal = () => {
  return (
    <div className="body">
      <div className="menu-container">
        <img className="button-img" src={thermal} alt="pressureimg" style={{width: 40, height: 40}}/><br/>
        <span>180 J</span>
      </div>
      <div className="button-title">
        <span>thermal</span><br/>
        <span>efficiency</span>
      </div>
    </div>
  )
}

export default Thermal;