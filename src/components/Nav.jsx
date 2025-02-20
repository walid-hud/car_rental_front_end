import {MdElectricCar} from "react-icons/md"
import { Link } from "react-router-dom";
const Nav = ({Children}) => {
  window.addEventListener('scroll' , (e)=>{
    let nav = document.getElementById('nav')
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(0,0,0,0.6)';
      nav.style.borderBottom = "2px solid yellow"
    } else {
      nav.style.background = 'transparent';
      nav.style.borderBottom = "none"

    }
  })
  return (
    <>
      <nav id="nav">
      <Link to="/">
        <div id="logo-container">
          <MdElectricCar className="icon"/>
          <p translate="no" >Slim <span>Car</span></p>
        </div>
      </Link>
      </nav>
    </>
  )
}

export default Nav
