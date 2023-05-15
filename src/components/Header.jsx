import React from 'react'
import { BsUpload,BsYoutube } from 'react-icons/bs';
import {Link} from 'react-router-dom';
import "../style.css"

const Header = () => {
  return (
    <div>
      <header className='menu'>
        <Link to='/' className="logo">My<span>Logo</span></Link>
        <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Service'>Service</Link>
        </div>
      </header>
      <main>
        <div className='ContentHero'>
           <h1>One-click <br /> solution for your <br /> static website.</h1>
           <p>let me Know You</p>
           <button className='btnfirst'><BsUpload/> Upload for Free</button>
           <button><BsYoutube/> Watch Video</button>
        </div>
        <div>
          <img src="./images/hero.png" alt="" />
        </div>
      </main>
    </div>
    
  )
}

export default Header