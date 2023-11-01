import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log(email,password)
  return (
    <div className='body'>
<div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
      <input type="text"  name="" required="" onChange={e=>setEmail(e.target.value)} />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" onChange={e=>setPassword(e.target.value)} />
      <label>Password</label>
    </div>
    <a href="#">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>




    </div>
  )
}

export default Login