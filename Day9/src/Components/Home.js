import React from 'react'
import './Home.css'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Home() {
  return(
  <div className='home'>
    <div className="car">
      
  
    <img src="https://i.ibb.co/wBmQZ6x/Beige-Brown-Aesthetic-Photo-Collage-Shop-Promotion-Banner-1.png"></img>

     </div>
      <Link to="/categories"><button className='r'>RENT NOW</button></Link>
      {/* <button className='s'>SELL NOW</button> */}
  </div>


     

    
  
    )
}

export default Home