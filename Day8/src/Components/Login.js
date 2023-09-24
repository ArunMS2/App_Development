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
      
      <h2>WELCOME  </h2>
      <form>
      <div>
      <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
        </div>
        <div>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
        </div>
        <button onClick={validate} type="submit">Login</button>
      </form>
     
      <h2> New to FAC Store ? Register</h2>
      
      <h1><Link to="/buyer-signup"><button className='SIGNUP'>Sign up</button></Link></h1>
    </div>
    <div class="image-container"></div>
  </div></div>
  )
}

export default Login