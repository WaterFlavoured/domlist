import React from "react"
import './Navbar.css'
import logoimage from '/mPotato.png'
const Navbar = () => {
  return (
    <nav>
      <div className='logofun'>
        <img src={logoimage} alt="" />
        <h1>TO DO LIST</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Account</li>
      </ul>
    </nav>
  )
}

export default Navbar