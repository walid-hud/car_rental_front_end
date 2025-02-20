import { useState, useEffect } from "react"

import { MdClose, MdPerson, } from "react-icons/md"
import { TbHeart, TbLogin, TbMenu2 } from "react-icons/tb"
import { NavLink } from "react-router-dom"


const Menu = () => {

  const handleClickOutside = (event) => {
    const menuContainer = document.getElementById("menu-container")
    if (menuContainer && !menuContainer.contains(event.target)) {
      setMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  const [menu, setMenu] = useState(false)
  function toggleMenu() {
    setMenu(!menu)
  }
  return (
    <div id="menu-container">
      {menu ?
        <MdClose onClick={toggleMenu} id="icon" /> :
        <TbMenu2 onClick={toggleMenu} id="icon" />
      }
      <div className={menu ? "menu menu-active" : "menu"}>

        <NavLink className={({ isActive }) => isActive ? "link-active" : " "} to="/">
        <div className="profile">
          <p className="link-text">guest</p>
          <MdPerson className="icon" />
        </div>
        </NavLink>
        <hr />
        <NavLink className={({ isActive }) => isActive ? "link-active" : " "} to="/favorites">
          <div className="profile">
            <p className="link-text">favorites</p>
            <TbHeart className="icon" />
          </div>
        </NavLink>
        
        <div className="register">
          <p>sign up </p>
          <h2>|</h2>
          <p>login</p>
          <TbLogin className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Menu
