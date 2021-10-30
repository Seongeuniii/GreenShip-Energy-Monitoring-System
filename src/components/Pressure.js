import pressure from '../img/pressure1.png'
import '../style/body.css'

const Pressure = () => {
  return (
    <div className="body">
      <div className="menu-container">
        <img className="button-img" src={pressure} alt="pressureimg"/><br/>
        <span>60 Pa</span>
      </div>
      <div className="button-title">
        <span>chamber</span><br/>
        <span>pressure</span>
      </div>
    </div>
  )
}

export default Pressure;