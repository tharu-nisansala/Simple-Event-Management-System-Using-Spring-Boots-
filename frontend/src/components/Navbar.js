import React from 'react'
import '../components/Navbar.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink, useLocation  } from "react-router-dom";
function Navbar() {

  const location = useLocation();

  return (
    <div className='navbar'>
        {/*Logo */}
        <h2 className='logo' >ems</h2>
        {/*Navigation Links */}
        <div className='links'>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Events
        </NavLink>

       {location.pathname !== "/eventform" && (
          <NavLink to="/eventform">
            <button className='button'>
              Create New Event <FaArrowRightLong />
            </button>
          </NavLink>
        )}
        </div>
    </div>
  )
}

export default Navbar