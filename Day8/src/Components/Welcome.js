import React from 'react'
import './Welcome.css'
import Footer from './Footer';

import { Link } from 'react-router-dom'
function Welcome() {
  return (
    <div className="con"> 
      {/* <Footer></Footer> */}
    <Link to="/login"><div className='sell'>SHOP NOW</div></Link>  
    </div>
  
  )
}

export default Welcome