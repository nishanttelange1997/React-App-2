import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { MdAccountBox } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
  
      <NavLink className="navbar-brand"  to="/" >REACT-APP</NavLink>
      
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " exact to="/" >HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about" >ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      
      </div>
   
      <Link className="btn btn-outline-dark text-black text-center" to="/users/add">ADD-USER <MdAccountBox style={{fontSize:"25px"}}/>  </Link>
    </div>
  
  
  </nav>
  
  )
}

export default Navbar