import React from 'react'
import '../assets/Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <h1 className="logo">GPT-3</h1>
      <ul className='nav-li'>
        <li>Home</li>
        <li>What is GPT?</li>
        <li>Open AI</li>
        <li>Case Studies</li>
        <li>Library</li>
      </ul>
    <div className="sign-bar">
      <a href="#">Sign in</a>
      <button className="sign-btn">Sign Up</button>
    </div>
    </div>
  )
}

export default Navbar