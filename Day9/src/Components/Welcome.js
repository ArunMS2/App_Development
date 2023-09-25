import React from 'react'
import './Welcome.css'
import Footer from './Footer';

import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <div className="con"> 
     <div>
    <Link to="/login"><button className='shop'>SHOP NOW</button></Link>  
    <Link to="/adminlogin" className='ad'>Admin-Login</Link>
    </div>
    </div>
  
  )
}

export default Welcome