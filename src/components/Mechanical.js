import '../style/body.css'
import mechanical from '../img/mechanical.png'

const Mechanical = () => {
  return (
    <div className="body">
      <div className="menu-container">
        <img className="button-img" src={mechanical} alt="pressureimg"/><br/>
        <span>1780 kcal</span>
      </div>
      <div className="button-title">
        <span>mechanical</span><br/>
        <span>efficiency</span>
      </div>
    </div>
  )
}

export default Mechanical;