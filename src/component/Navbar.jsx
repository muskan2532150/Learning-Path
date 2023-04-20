import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import '../assets/Navbar.css'

const Navbar = () => {
  const [toggle, setToggle ] = useState(false);

  const MenuHandler = () =>{
   setToggle(!toggle);
  }

  return (
    <div className='nav d-flex'>
      <img className="logo" src='images/logo.svg'/>
      <div className='nav-container d-flex'>
        <ul className='nav-li d-flex'>
          <li><a href="#home">Home</a></li>
          <li><a href="#gpt-intro">What is GPT3?</a></li>
          <li><a href="#possibility">Open AI</a></li>
          <li><a href="#features">Case Studies</a></li>
          <li><a href="#blog">Library</a></li>
        </ul>
      </div>
      <div className="sign-bar d-flex">
        <a href="#">Sign in</a>
        <button className="sign-btn">Sign Up</button>
      </div>
      <div className={`sidenavbar ${toggle ? 'd-flex': 'd-none'} `}>
      <ul className='sidenav-li d-flex'>
          <li><a href="#home">Home</a></li>
          <li><a href="#gpt-intro">What is GPT3?</a></li>
          <li><a href="#possibility">Open AI</a></li>
          <li><a href="#features">Case Studies</a></li>
          <li><a href="#blog">Library</a></li>
          <div className="sign-bar-menu">
          <a href="#">Sign in</a>
          <button className="sign-btn">Sign Up</button>
        </div>
        </ul>
        </div>
      <div>
         <button className='icon' onClick={MenuHandler}>
       {!toggle?<button className='icon'><RiMenu3Line/></button>:
       <button className='icon' onClick={closeMenuHandler}><RiCloseLine/></button>} </button>
      </div>
    </div>
  )
}

export default Navbar