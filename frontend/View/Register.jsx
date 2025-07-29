import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }


  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className='form'>
        <form action="" onSubmit={onSubmit}>
          <h1> Create your account</h1>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <input type="password"  placeholder='Password'/>
          <input type="password"  placeholder='Re-enter the Password'/>
          <button className='btn btn-block'>Register</button>
        </form>

        <p className='message'>
         Already have an account? <Link to="/login">login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register
