import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { login } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav=useNavigate();
  const dispatch=useDispatch();
  
  const validate=(e)=>{
    e.preventDefault();
    if(email.length===0||password.length===0){
      alert("Kindly Enter All Details");
    }
    else{
      dispatch(login(email))
        nav('/home')
    }
  }
  return (
    <div class="login">
    <div class="outer-container">
    <div class="content-container">
    <br/>
    <br/>
    <br/>
    <br/>
      
      <h2>WELCOME   &#x2764; </h2>
      <form>
      <div>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
        </div>
        <div>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        </div>
        <button onClick={validate} type="submit">Login</button>
      </form>
     
      <h3> New to FAC Store ? </h3>
      <h3>Register as</h3>
      <h2><Link id="register" to="/buyer-signup">Buyer&nbsp;&nbsp;</Link><h2>OR&nbsp;&nbsp; </h2><Link id="register" to="/seller-signup">Seller
      </Link></h2>
    </div>
    <div class="image-container"></div>
  </div></div>
  )
}

export default Login