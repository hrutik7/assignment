import React from 'react'
import "./navbar.css"
import logo from "../Assests/logo.png"
import dummy from "../Assests/dummy.png"
const Navbar = () => {
  return(
      <div className='navbar__container'>
          <div className='logo'>
              <img src={logo} alt="" />
            
          </div>

          <div className="user__info">
                <img src={dummy}  alt=""/>
          </div>

          <div className="user__name">
              Siddarth Jain
          </div>
      </div>
  )
}

export default Navbar