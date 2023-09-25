import React from 'react'
import "./cat.css"
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>

    <div className="card0">
      
  
    <img src="https://i.ibb.co/hY5JL1s/Shop-Now.png"></img>

  <div className="card0__content">
  <Link to="/MEN"><p className="card__title">MEN</p></Link>
  </div>
  </div>
  <div className="card1">
      
  
    <img src="https://i.ibb.co/G0w4p3N/weekend.png"></img>

  <div className="card1__content">
  <Link to="/MEN"><p className="card__title">WOMEN</p></Link>
  </div>
  </div>
  <div className="card2">
      
  
    <img src="https://i.ibb.co/hFdyWM4/Foot-Wear-3.png"></img>

  <div className="card2__content">
  <Link to="/MEN"><p className="card__title">ACCESSORIES</p></Link>
  </div>
  </div>
  <div className="card3">
      
  
    <img src="https://i.ibb.co/SJDgpcG/Foot-Wear-1.png"></img>

  <div className="card3__content">
  <Link to="/MEN"><p className="card__title">FOOTWEAR</p></Link>
  </div>
  </div>
  </div>
  
  )
}

export default Categories