import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../App.scss';
function Header() {
  return (
    <div className="header">
     <div className='logo'> <img src={logo}  alt='logo'/></div>  
        <h1>6in1 React beginner projects</h1>
      <ul className='menus'>
        <li className='menu'> <Link to="/counter">counter</Link></li>
        <li className='menu'> <Link to="/modal">modal</Link></li>
        <li className='menu'> <Link to="/quiz">quiz</Link></li>
        <li className='menu'> <Link to="/users">users</Link></li>
        <li className='menu'> <Link to="/currency_convertor">currency convertor</Link></li>
        <li className='menu'> <Link to="/photos">photos</Link></li>
      </ul>
  </div>
  )
}

export default Header