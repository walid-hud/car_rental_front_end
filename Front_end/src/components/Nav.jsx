import {MdElectricCar} from "react-icons/md"
const Nav = ({Children}) => {
  window.addEventListener('scroll' , (e)=>{
    let nav = document.getElementById('nav')
    if (window.scrollY > 300) {
      nav.style.background = 'rgba(0,0,0,0.6)';
    } else {
      nav.style.background = 'transparent';
    }
  })
  return (
    <>
      <nav id="nav">
      <a href="/">
        <div id="logo-container">
          <MdElectricCar className="icon"/>
          <p translate="no" >Slim <span>Car</span></p>
        </div>
      </a>
      </nav>
    </>
  )
}

export default Nav
