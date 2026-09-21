import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../css/Login.css";
import Footer from '../Components/Footer';



function Login() {
  const navigate=useNavigate()
  const [datas,setdatas]=useState({
      email:'',
      password:'',
  })
  function setdata1(e){
    setdatas({
        ...datas,
      [e.target.name]:e.target.value
    })
  }
   function handleLogin(e){
    e.preventDefault();
    const savedata=JSON.parse(localStorage.getItem('user'))
    if (!savedata){
         alert('Please signup first')
         navigate('/signup')
         return;
    }
    if(datas.email === savedata.email &&
      datas.password === savedata.password
    ){
       sessionStorage.setItem("isLoggedIn", "true");
         alert('Login successful')
          
         navigate('/',{replace: true})
    }else{
      alert('Invalid email or password')
     
    }
    
    
   }
  return (
    <>
    <div  className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to continue shopping</p>
        </div>

      <form onSubmit={handleLogin}>
        <label>Email</label>
       <input className="input-group"
        type="email" name='email' 
        value={datas.email} 
         placeholder="Enter your email"
        onChange={setdata1}  /><br></br>
       <label>Password</label>
        <input className="input-group"
         type="password" name='password'
          value={datas.password}
           placeholder="Enter your password"
           onChange={setdata1}  /><br></br>
         <button  className="login-btn" type='submit'>Login</button>
         
      </form>
     <p className="signup-text">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Login
