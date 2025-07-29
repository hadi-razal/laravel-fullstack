import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }


  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form action="" onSubmit={onSubmit}>
          <h1>Login into your account</h1>
          <input type="email" placeholder='Email' />
          <input type="password"  placeholder='Password'/>
          <button className='btn btn-block'>Login</button>
        </form>

        <p className='message'>
          Not Registered? <Link to="/register">Create an account</Link>
        </p>

      </div>
    </div>
  )
}

export default Login
