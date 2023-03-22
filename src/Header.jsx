import React from 'react'
import {Link} from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <div className='menu'>
      <Link to='/' className="logo">My<span>Logo</span></Link>
      <div className="nav">
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Service'>Service</Link>
      </div>
    </div>
    
  )
}

export default Header